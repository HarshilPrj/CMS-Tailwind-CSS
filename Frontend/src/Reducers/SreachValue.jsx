let initialState = "";

const sreachValue = (state = initialState, action) => {
    switch (action.type) {
        case "Sreach":
            return (state = action.payload);
        default:
            return state;
    }
};

export default sreachValue;
