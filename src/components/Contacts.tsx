import React from 'react'
import { connect } from 'react-redux';
import {bindActionCreators, Dispatch} from "redux";
import { add, del } from "./store/actions";

export const ACTION_ADD = 'ACTION_ADD';
export const ACTION_DEL = 'ACTION_DEL';

interface StateInterface {

}

interface PropsInterface {
    notes: Array<string>,
    add: () => {},
    del: (i: number) => {}
}

export class Contacts extends React.Component<PropsInterface, StateInterface> {

    constructor(props: PropsInterface) {
        super(props);
        this.state = {};
    }

    render(): React.ReactNode {

        let { notes, add } = this.props;

        return(
            <div>
                <button onClick={add}>Добавить</button>
                <input
                    type="text"
                    id="input"
                />
                <ul>
                    {this.props.notes.map((n: string, i: number) =>
                        (<li
                            key={i}>
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
        add: bindActionCreators(add, dispatch)
    }
}

export default connect(putStateToProps, putActionsToProps)(Contacts);