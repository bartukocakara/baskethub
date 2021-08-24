const profileReducer = (state = false, action) => {
    switch (action.type) {
        case "PROFILE_INDEX":
            return !state;
        case "PROFILE_EDIT":
            return state;
        default:
            return state;
    }
}

export default profileReducer;