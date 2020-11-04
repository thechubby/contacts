import React from 'react'
import { connect } from 'react-redux';
import {bindActionCreators, Dispatch} from "redux";
import { add, del, changeInput } from "./store/actions";

export const ACTION_ADD = 'ACTION_ADD';
export const ACTION_DEL = 'ACTION_DEL';
export const ACTION_CHANGE_INPUT = 'ACTION_CHANGE_INPUT';

interface StateInterface {

}

interface PropsInterface {
    notes: Array<string>,
    input: string,
    changeInput(newString: string): void,
    add(): void,
    del(i: number): void
}

export class Contacts extends React.Component<PropsInterface, StateInterface> {

    constructor(props: PropsInterface) {
        super(props);
    }

    render(): React.ReactNode {

        let { notes, input, add, del, changeInput } = this.props;

        return(
            <div>
                <button onClick={add}>Добавить</button>
                <input
                    type="text"
                    id="input"
                    value={input}
                    onChange=
                        {
                            (event) =>
                            {
                                changeInput(event.target.value)
                            }
                        }
                />
                <ul>
                    {React.Children.map(notes, (n: string, i: number) =>
                        (<li
                            key={n}>
                            <button onClick={() => del(i)}>Удалить</button>
                            {i} {n}
                        </li>))}
                </ul>
            </div>)
    }
}

const putStateToProps = (state: PropsInterface) :object => {
    return {
        notes: state.notes
    };
};

const putActionsToProps = (dispatch: Dispatch<any>) :object => {
    return {
        del: bindActionCreators(del, dispatch),
        add: bindActionCreators(add, dispatch),
        changeInput: bindActionCreators(changeInput, dispatch)
    }
}

export default connect(putStateToProps, putActionsToProps)(Contacts);