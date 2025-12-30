

export const reducer = (state: number, action: { type: string }) => {
    switch (action.type) {
        case "increment":
            return state + 1;
        case "decrement":
            return state > 0 ? state - 1 : 0;


        default:
            return state;
    }
}