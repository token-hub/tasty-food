import { Helmet } from 'react-helmet';
import Metadata from './metadata';

function DefaultMetaData() {
    return (
        <>
            <Helmet>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="author" content="John Suyang" />
                <meta name="keywords" content="recipe, recipes" />
                <meta name="theme-color" content="#f1ac18" />
            </Helmet>
            <Metadata title="Tasty Food" description="A web App where people can look and share recipes they like" />
        </>
    );
}

export default DefaultMetaData;
