import { useNavigation } from "react-router";

function AuthSubmitButton() {
    let navigation = useNavigation();
    return navigation.state === "submitting" ? (
        <button className="w-100 btn btn-sm btn-primary mb-2 text-white" disabled>
            Submitting ...
        </button>
    ) : (
        <button className="w-100 btn btn-sm btn-primary mb-2 text-white">SUBMIT</button>
    );
}

export default AuthSubmitButton;
