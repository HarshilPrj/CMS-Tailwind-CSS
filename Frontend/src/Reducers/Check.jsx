let initialState = null;

const checkLogin = (state = initialState, action) => {
    switch (action.type) {
        case "IN":
            return (state = true);
        case "InOut":
            return (state = false);
        case "OUT":
            return (state = null);
        default:
            return state;
    }
};

export default checkLogin;
