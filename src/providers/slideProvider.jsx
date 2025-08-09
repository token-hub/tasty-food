import { createContext, useContext } from "react";

const SlideContext = createContext();

export function useSlideContext() {
    return useContext(SlideContext);
}

function SlideProvider({ children }) {
    const values = {};
    return <SlideContext value={values}>{children}</SlideContext>;
}

export default SlideProvider;
