import { legacy_createStore as createStore } from "redux";

// Reducer
const reducer = (state = { data: null }, action) => {
    switch (action.type) {
        case "SET_DATA":
            return { ...state, data: action.payload };
        default:
            return state;
    }
};

// Store
const store = createStore(reducer);

// Action creator
export const setData = (data) => ({
    type: "SET_DATA",
    payload: data,
});

export default store;
