import { createStore } from "redux";

const initialState = {
    showComponent: false,
    text: '',
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_SHOW':
            return {
                ...state,
                showComponent: action.showComponent,
            };
        case 'SAVE_STATE':
            return {
                ...state,
                text: action.text
            };
        default:
            return state;
    }
}
const store = createStore(reducer);

export default store;