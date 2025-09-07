import { PATHS, SERVER_API_URL } from "./constants";
import { data as responseData, redirect } from "react-router";

export function getMainHeaderText(pathname) {
    let currentHeader = "";

    if (pathname.includes(PATHS.password.name)) {
        currentHeader = PATHS.password.toDisplay;
    } else if (pathname.includes(PATHS.profile.name)) {
        currentHeader = PATHS.profile.toDisplay;
    } else if (pathname.includes(PATHS.myRecipes.name)) {
        currentHeader = PATHS.myRecipes.toDisplay;
    } else if (pathname.includes(PATHS.archives.name)) {
        currentHeader = PATHS.archives.toDisplay;
    }

    return currentHeader;
}

export function getDayAndMonthFromDate(date) {
    if (!date) return;
    const newDate = new Date(date);

    return newDate.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric"
    });
}

export function getTimeFromDate(date) {
    if (!date) return;
    return date.toLocaleTimeString("en-us", { hour: "2-digit", minute: "2-digit" });
}

export function trimTextAddEllipsis(text, index) {
    if (!text || !index) return;
    let trimText = text.slice(0, index);
    trimText += "...";
    return trimText;
}

export function capitalizeFirstLetter(text) {
    if (!text) return;
    let firstLetter = text.slice(0)[0].toUpperCase();
    return [firstLetter, ...text.slice(1)].join("");
}

export function removeSpacesFromText(text) {
    if (!text) return;
    return text.replaceAll(" ", "");
}

export function customFetch({ url, data, method = "POST" }) {
    return fetch(`${SERVER_API_URL}/${url}`, {
        method: method,
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify(data)
    });
}

export async function customTryCatchWrapper(fetchCB, successCB, redirectTo) {
    try {
        const result = await fetchCB();
        const data = await result.json();

        if (result.ok) {
            if (successCB) {
                await successCB();
            }
            if (redirectTo) {
                return redirect(redirectTo);
            }
            return responseData({ result: data });
        } else {
            return responseData(
                {
                    error: data.error || "Something went wrong"
                },
                { status: result.status }
            );
        }
    } catch (error) {
        return responseData(
            {
                error: error?.message || "Something went wrong"
            },
            { status: 500 }
        );
    }
}

export function generateInput(arr = [], isIngredient = true) {
    const newId = new Date().toISOString();
    if (arr?.length) {
        return arr.map((data) => {
            return {
                ...data,
                id: data.id
            };
        });
    }

    if (isIngredient) {
        return [
            {
                id: newId,
                quantity: 0,
                unit: "",
                name: ""
            }
        ];
    } else {
        return [
            {
                id: newId,
                instruction: ""
            }
        ];
    }
}

export function validateRecipeState(state) {
    if (!state) return [];
    const keys = Object.keys(state);
    let values = Object.values(state);

    if (keys.includes("ingredients")) {
        values = values.map((data) => {
            data = data.filter((inner) => {
                return inner.quantity && inner.unit && inner.name;
            });

            return data;
        });
    }

    if (keys.includes("instructions")) {
        values = values.map((data) => {
            data = data.filter((inner) => {
                return inner.instruction;
            });
            return data;
        });
    }

    let errors = [];

    for (let i = 0; i < keys.length; i++) {
        const currentValue = values[i];
        const currentKey = keys[i];
        const isValueAnArray = Array.isArray(currentValue);
        const isValueIsEmptyArr = isValueAnArray && !currentValue.length;
        const isValueAnArrayLessThan2 = !isValueIsEmptyArr && currentValue.length < 2;

        if (isValueIsEmptyArr && currentKey === "categories") {
            errors.push({ key: keys[i], message: "You must select at least 1 category" });
            continue;
        }

        if (isValueAnArrayLessThan2 && currentKey === "ingredients") {
            errors.push({ key: keys[i], message: "You must select at least add 2 ingredients" });
            continue;
        }

        if (isValueAnArrayLessThan2 && currentKey === "instructions") {
            errors.push({ key: keys[i], message: "You must select at least add 2 instructions" });
            continue;
        }

        if (!currentValue || isValueIsEmptyArr) {
            errors.push({ key: keys[i], message: `${keys[i]} must not be empty` });
        }
    }

    return errors;
}
