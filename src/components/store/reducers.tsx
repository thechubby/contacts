import { ACTION_ADD } from "../Contacts";
import { ACTION_DEL } from "../Contacts";

interface StateInterface {
    notes: any
}

let initialState: StateInterface = {
    notes: ['Приготовить поесть', 'Убраться в квартире','Сходить в магазин']
};

export const rootReducer = (state = initialState, action: any) :any => {
    switch (action.type) {
        case ACTION_ADD:
            let addState = state.notes.push(action.payload)
            return {
                ...state,
                notes: addState
            }
        case ACTION_DEL:
            let delState = state.notes.splice(action.payload, 1)
            return {
                ...state,
                notes: delState
            }
    }
    return state;
};