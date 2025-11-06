import { Form, useActionData } from 'react-router';
import { useEffect } from 'react';
import { useToastStore } from '../stores/useToastStore';
import { useEmailFetcher } from '../hooks/useEmailFetcher';
import { getSession } from '../queries/getSession';
import { useQuery } from '@tanstack/react-query';

function Profile() {
    const actionData = useActionData();
    const createToast = useToastStore((state) => state.createToast);
    const { fetcher } = useEmailFetcher();

    const { data: session } = useQuery({
        queryKey: ['session'],
        queryFn: ({ signal }) => getSession(signal)
    });

    const user = session?.details?.user;

    function handleEmailVerification() {
        fetcher.submit({ email: user.email }, { method: 'POST', action: '/emailVerification' });
    }

    useEffect(() => {
        if (actionData?.error) {
            createToast({ headerText: 'Server Error', bodyText: actionData?.error, isSuccess: false });
        }

        if (actionData?.result) {
            createToast({
                headerText: 'Update user information',
                bodyText: 'User information was successfully updated'
            });
        }
    }, [actionData, createToast]);

    return (
        <>
            <title>Profile</title>
            <Form className="form-floating p-3 p-md-0" method="POST">
                <div className="form-floating w-100">
                    <input
                        type="text"
                        required
                        className="form-control bg-gray-light mb-3"
                        id="email"
                        defaultValue={user?.email ?? ''}
                        placeholder="johndoe@gmail.com"
                        disabled={user?.email ?? false}
                    />
                    <label htmlFor="email">Email</label>
                </div>

                <div className="form-floating w-100">
                    <input
                        type="text"
                        required
                        name="name"
                        className="form-control bg-light mb-3"
                        id="name"
                        defaultValue={user?.name ?? ''}
                        placeholder="John"
                    />
                    <label htmlFor="name">Name</label>
                </div>

                <div className={`d-flex ${user?.emailVerified ? 'justify-content-end' : 'justify-content-between'} `}>
                    {!user?.emailVerified && (
                        <button
                            disabled={fetcher.state === 'submitting'}
                            className="btn btn-primary text-white"
                            type="button"
                            onClick={handleEmailVerification}
                        >
                            {fetcher.state === 'submitting' ? (
                                <>
                                    <span className="spinner-grow spinner-grow-sm me-2" aria-hidden="true" />
                                    <span role="status">Submitting ...</span>
                                </>
                            ) : (
                                'Verify your email'
                            )}
                        </button>
                    )}

                    <button type="submit" className="btn btn-primary text-light">
                        Submit
                    </button>
                </div>
            </Form>
        </>
    );
}

export default Profile;
