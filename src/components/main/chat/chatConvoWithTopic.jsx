import { useCreateConversation } from "../../../hooks/useCreateConversation";
import { objectToFormData, trimTextAddEllipsis } from "../../../lib/utilities";
import { useChatStore } from "../../../stores/useChatStore";
import { useUserStore } from "../../../stores/useUserStore";

function ChatConvoWithTopic() {
    const user = useUserStore((state) => state.user);
    const selectedConvo = useChatStore((state) => state.selectedConvo);
    const convoWith = selectedConvo?.participants?.find((u) => u.userId != user.id);
    const topicLength = +selectedConvo?.recipes?.length;
    const { fetcher } = useCreateConversation();

    function handleChange(e) {
        const value = e.target.value;

        const targetRecipe = selectedConvo?.recipes?.find((recipe) => recipe.recipeId == value);
        if (!targetRecipe) return;
        fetcher.submit(
            objectToFormData({
                recipe: {
                    recipeId: targetRecipe.recipeId,
                    name: targetRecipe.name,
                    imageLink: targetRecipe.imagelink
                },
                participants: [
                    {
                        name: user?.name,
                        userId: user?.id
                    },
                    {
                        name: convoWith.name,
                        userId: convoWith.userId
                    }
                ]
            }),
            { action: "/:author/recipes/:recipeId/createConversation", method: "POST" }
        );
    }

    return (
        <>
            <div className="d-flex align-items-center">
                <span className="fs-7 m-0 fw-bold ps-3">{convoWith?.name}</span>
                <span className="mx-2 fs-7">*</span>
                {topicLength == 1 && <span className="fs-7">{trimTextAddEllipsis(selectedConvo.recipes[0].name, 20)}</span>}
                {topicLength > 1 && (
                    <select
                        class="form-select p-2 mb-2"
                        aria-label="Recipe Topics"
                        onChange={handleChange}
                        value={selectedConvo.recipes.find((r) => r.isLatest).recipeId}
                    >
                        {selectedConvo.recipes.map((recipe) => {
                            return <option value={recipe.recipeId}>{trimTextAddEllipsis(recipe.name, 20)}</option>;
                        })}
                    </select>
                )}
            </div>
            <hr className="m-0" />
        </>
    );
}

export default ChatConvoWithTopic;
