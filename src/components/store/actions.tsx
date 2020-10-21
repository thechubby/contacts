import {ACTION_ADD, ACTION_DEL} from "../Contacts";

export const add = () :object => {
    let value: HTMLElement | null = document.getElementById("input");
    return {
        type: ACTION_ADD,
        payload: value
    }
}

export const del = (i: number) :object => {
    return {
        type: ACTION_DEL,
        payload: i
    }
}