import { Form, useActionData } from 'react-router';
import { useToastStore } from '../stores/useToastStore';
import { useEffect, useRef } from 'react';

function Password() {
    const actionData = useActionData();
    const createToast = useToastStore((state) => state.createToast);
    const formRef = useRef();

    useEffect(() => {
        if (actionData?.errors) {
            actionData.errors.forEach((error) =>
                createToast({ headerText: 'Invalid fields', bodyText: error, isSuccess: false })
            );
            formRef.current.reset();
        }

        if (actionData?.error) {
            createToast({ headerText: 'Server Error', bodyText: actionData?.error, isSuccess: false });
            formRef.current.reset();
        }

        if (actionData?.result) {
            createToast({ headerText: 'Change Password', bodyText: 'Password was successfully changed' });
            formRef.current.reset();
        }
    }, [actionData, createToast]);

    return (
        <>
            <title>Password</title>
            <Form ref={formRef} className="form-floating p-3 p-md-0" method="POST">
                <div className="form-floating w-100">
                    <input
                        type="password"
                        required
                        className="form-control bg-light mb-3"
                        id="oldPassword"
                        name="oldPassword"
                        placeholder="********"
                    />
                    <label htmlFor="oldPassword">Old password</label>
                </div>

                <div className="form-floating w-100">
                    <input
                        type="password"
                        required
                        className="form-control bg-light mb-3"
                        id="newPassword"
                        name="password"
                        placeholder="********"
                    />
                    <label htmlFor="newPassword">New password</label>
                </div>

                <div className="form-floating w-100">
                    <input
                        type="password"
                        required
                        className="form-control bg-light mb-3"
                        id="confirmPassword"
                        name="confirmPassword"
                        placeholder="********"
                    />
                    <label htmlFor="confirmPassword">Confirm password</label>
                </div>

                <div className="d-flex justify-content-end">
                    <button type="submit" className="btn btn-primary text-light">
                        Submit
                    </button>
                </div>
            </Form>
        </>
    );
}

export default Password;
