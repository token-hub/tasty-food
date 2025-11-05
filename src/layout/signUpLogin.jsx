import { Outlet, useLocation, useNavigate } from 'react-router';
import Header from './authHeader';
import { useUserStore } from '../stores/useUserStore';
import { useEffect } from 'react';

function SignUpLogin() {
    const user = useUserStore((state) => state.user);
    const isLoading = useUserStore((state) => state.isLoading);
    const { pathname } = useLocation();

    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoading && user) {
            if (!pathname.includes('email-verified')) {
                navigate('/');
            }
        }
    }, [isLoading, user, navigate, pathname]);

    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}

export default SignUpLogin;
