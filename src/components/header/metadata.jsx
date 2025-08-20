import { Helmet } from "react-helmet";

function Metadata({ description, title }) {
    return (
        <Helmet>
            <meta name="description" content={description} />
            <title>{title}</title>
        </Helmet>
    );
}

export default Metadata;
