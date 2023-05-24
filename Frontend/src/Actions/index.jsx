export const loginIn = () => {
    return {
        type: "IN",
    };
};

export const loginOut = () => {
    return {
        type: "OUT",
    };
};

export const loginInOut = () => {
    return {
        type: "InOut",
    };
};

export const sreachValue = (data) => {
    return {
        type: "Sreach",
        payload: data,
    };
};
