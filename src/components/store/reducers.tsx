import { ACTION_ADD } from "../Contacts";
import { ACTION_DEL } from "../Contacts";

let notes: Array<string> = ['Приготовить поесть', 'Убраться в квартире','Сходить в магазин']

export const rootReducer = (state = notes, action: any) => {
    switch (action.type) {
        case ACTION_ADD:
            return {
                ...state,
                notes: action.payload
            }
        case ACTION_DEL:
            return {
                ...state,
                notes: notes.splice(action.payload,1)
            }
    }
    return state;
};