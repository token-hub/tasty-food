import { Outlet, useNavigate } from 'react-router';
import Header from './authHeader';
import { useUserStore } from '../stores/useUserStore';
import { useEffect } from 'react';

function SignUpLogin() {
    const user = useUserStore((state) => state.user);
    const isLoading = useUserStore((state) => state.isLoading);

    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoading && user) {
            navigate('/');
        }
    }, [isLoading, user, navigate]);

    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}

export default SignUpLogin;
