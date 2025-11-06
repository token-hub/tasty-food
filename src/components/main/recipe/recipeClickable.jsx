import { Link, useLocation } from 'react-router';
import { objectToFormData, removeSpacesFromText } from '../../../lib/utilities';
import { DEFAULT_IMAGE } from '../../../lib/constants';
import UnarchiveIcon from '../../../assets/icons/unarchiveIcon';

function Recipe({ recipe, isArchived = false, fetcher }) {
    const { image, name } = recipe;
    const { pathname } = useLocation();
    const linkPreFix = pathname.includes('me') ? 'me' : removeSpacesFromText(recipe.author.name);
    const recipeLinkToUse = `/${linkPreFix}/recipes/${recipe._id}`;
    const imageSource = image ?? DEFAULT_IMAGE;

    let classes = 'card recipe bg-white shadow ';
    if (isArchived) {
        classes += 'archived';
    }

    function handleUnarchiveRecipe() {
        fetcher.submit(objectToFormData({ recipeId: recipe._id, isArchive: false }), {
            method: 'PUT',
            action: '/me/recipes/create'
        });
    }

    return (
        <div className={classes}>
            <div className="recipe_img position-relative">
                <Link to={recipeLinkToUse} className="text-muted link-underline link-underline-opacity-0">
                    <img src={imageSource} className="card-img-top " alt="test image" />
                </Link>
                {recipe?.isDummy && (
                    <div className="position-absolute bottom-5 end-5">
                        <span class="badge badge-secondary bg-primary">Dummy</span>
                    </div>
                )}
            </div>
            <div className="card-body">
                <div className="row pe-2">
                    <div className="col-11">
                        <Link to={recipeLinkToUse} className="text-muted link-underline link-underline-opacity-0">
                            <h5 className="card-title mb-3">{name}</h5>{' '}
                        </Link>
                    </div>
                    <div className="col-1">
                        {isArchived && (
                            <button className="btn border-0 p-0" onClick={handleUnarchiveRecipe}>
                                <UnarchiveIcon className="text-primary" height="16" width="16" />
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Recipe;
