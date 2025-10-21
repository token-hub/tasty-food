import { queryClient } from '../lib/queryClient';
import { customFetch, customTryCatchWrapper } from '../lib/utilities';

async function authAction({ request }) {
    const formData = await request.formData();
    const data = Object.fromEntries(formData.entries());

    const isSignUp = data.confirmPassword;
    const urlPostFix = isSignUp ? 'signUp' : 'signIn';

    return await customTryCatchWrapper(
        () => {
            return customFetch({
                url: `auth/${urlPostFix}`,
                data
            });
        },
        () => {
            queryClient.invalidateQueries({ queryKey: ['session'] });
        }
    );
}

export default authAction;
