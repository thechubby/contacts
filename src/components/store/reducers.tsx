import {ACTION_ADD, ACTION_DEL, ACTION_CHANGE_INPUT} from "../Contacts";

interface StateInterface {
    notes: Array<string>
    input: string
}

let initialState: StateInterface = {
    notes: ['Приготовить поесть', 'Убраться в квартире','Сходить в магазин'],
    input: ''
};

export const rootReducer = (state = initialState, action: any) :any => {
    switch (action.type) {
        case ACTION_ADD:
            console.log(state)
            return {
                ...state,
                notes: state.notes.concat(state.input)
            }
        case ACTION_DEL:
            let delState = state.notes.splice(action.payload, 1)
            console.log(state)
            return {
                ...state,
                notes: delState
            }
        case ACTION_CHANGE_INPUT:
            console.log(state)
            return {
                ...state, input: action.payload
            }
    }
    return state;
};