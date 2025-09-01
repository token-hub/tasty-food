async function AuthAction({ request, params }) {
    const formData = await request.formData();
    const data = Object.fromEntries(formData.entries());
    console.log(data);
}

export default AuthAction;
