import { useNavigation } from 'react-router';

function AuthSubmitButton({ text, disabled }) {
    let navigation = useNavigation();
    return navigation.state === 'submitting' ? (
        <button className="w-100 btn btn-sm btn-primary mb-2 text-white" disabled>
            Submitting ...
        </button>
    ) : (
        <button disabled={disabled} className="w-100 btn btn-sm btn-primary mb-2 text-white">
            {text ?? 'Submit'}
        </button>
    );
}

export default AuthSubmitButton;
