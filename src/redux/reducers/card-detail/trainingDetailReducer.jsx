const trainingDetailReducer = (state = false, action) => {
    switch (action.type) {
        case "PLAY":
            return !state;
        case "DROP":
            return state;
        default:
            return state;
    }
}

export default trainingDetailReducer;