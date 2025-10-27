import Submenu from '../components/main/submenu';
import { SUBMENU_HEADERS } from '../lib/constants';
import Profile from '../pages/profile';
import Password from '../pages/password';
import { useSlideStore } from '../stores/useSlideStore';
import { useUserStore } from '../stores/useUserStore';
import { useSocketStore } from '../stores/useSocketStore';
import { useSubmit } from 'react-router';

function Me() {
    const openSlide = useSlideStore((state) => state.openSlide);

    const user = useUserStore((state) => state.user);
    const socket = useSocketStore((state) => state.socket);
    const submit = useSubmit();

    async function handleLogout() {
        if (socket) {
            socket.emit('logout', { id: user?.id });
        }

        submit(null, { action: '/signOut', method: 'POST' });
    }

    return (
        <div className="d-md-none px-3">
            <Submenu
                clickHandler={() => openSlide({ open: true, header: SUBMENU_HEADERS[0], component: <Profile /> })}
                text={SUBMENU_HEADERS[0]}
            />
            <Submenu
                clickHandler={() => openSlide({ open: true, header: SUBMENU_HEADERS[1], component: <Password /> })}
                text={SUBMENU_HEADERS[1]}
            />

            <button type="button" onClick={handleLogout} className="btn btn-tertiary text-white mt-2 w-100 btn-sm">
                Logout
            </button>
        </div>
    );
}

export default Me;
