import { useState, useEffect } from "react";

export function useProgress(show) {
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

    function handleNext() {
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
