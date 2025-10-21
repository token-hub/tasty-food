import { useState, useEffect } from 'react';
import { useToastStore } from '../stores/useToastStore';
import { validateRecipeState } from '../lib/utilities';

export function useProgress(show, recipeState) {
    const { name, description, cookTime, prepTime, categories, ingredients, instructions } = recipeState;
    const createToast = useToastStore((state) => state.createToast);
    const toValidate = {
        1: {
            name,
            description,
            cookMinutes: cookTime.minutes,
            prepMinutes: prepTime.minutes,
            categories
        },
        2: { ingredients },
        3: { instructions }
    };

    const progressStep = 25; // for 4 parts of the modal that will sum to 100
    const progressMax = 100;
    const [progress, setProgress] = useState(progressStep);
    const showPrevButton = progress !== progressStep;
    const hideNextButton = progress === progressMax;
    const firstPart = progress === progressStep;
    const secondPart = progress === progressStep * 2;
    const thirdPart = progress === progressStep * 3;
    const fourthPart = progress === progressStep * 4;

    useEffect(() => {
        if (!show && progress !== progressStep) {
            setProgress(progressStep);
        }
    }, [show, progress]);

    function handleErrors() {
        const current = [firstPart, secondPart, thirdPart, fourthPart].findIndex((d) => d);
        const errors = validateRecipeState(toValidate[current + 1]);

        if (errors.length) {
            errors.forEach((error) => {
                createToast({ headerText: 'Field Error', bodyText: error.message, isSuccess: false });
            });
        }

        return Array.isArray(errors) ? errors.length : errors;
    }

    function handleNext() {
        const hasError = handleErrors();
        if (hasError) return;
        setProgress((prev) => prev + progressStep);
    }

    function handlePrevious() {
        setProgress((prev) => prev - progressStep);
    }

    return {
        progress,
        handleNext,
        handlePrevious,
        showPrevButton,
        hideNextButton,
        firstPart,
        secondPart,
        thirdPart,
        fourthPart
    };
}
