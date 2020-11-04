import {ACTION_ADD, ACTION_DEL, ACTION_CHANGE_INPUT} from "../Contacts";

export const add = () :object => {
    return {
        type: ACTION_ADD
    }
}

export const del = (value: number) :object => {
    return {
        type: ACTION_DEL,
        payload: value
    }
}

export const changeInput = (newInput: string) :object => {
    return {
        type: ACTION_CHANGE_INPUT,
        payload: newInput
    }
}