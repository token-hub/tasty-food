import { useLocation } from 'react-router';
import MainHeader from '../components/main/mainHeader';
import { getMainHeaderText } from '../lib/utilities';
import RecipeAddButton from '../components/main/recipe/recipeAddButton';

function Main({ children }) {
    let { pathname } = useLocation();
    let currentHeader = getMainHeaderText(pathname);
    let button;

    if (pathname.includes('me/recipes')) {
        button = <RecipeAddButton />;
    }

    return (
        <main className="py-3 mb-6 px-md-4 bg-light">
            <MainHeader text={currentHeader} button={button} />
            {children}
        </main>
    );
}

export default Main;
