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
        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler = (i: number) => {
        return (event: React.MouseEvent) => {
            del(i)
            event.preventDefault();
        }
    }

    render(): React.ReactNode {

        let { notes, add, del } = this.props;

        return(
            <div>
                <button onClick={add}>Добавить</button>
                <input
                    type="text"
                    id="input"
                />
                <ul>
                    {notes.map((n, i) =>
                        (<li
                            key={i}><button onClick={this.clickHandler(i)}>Удалить</button> {i} {n}
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
        add: bindActionCreators(add, dispatch),
        del: bindActionCreators(del, dispatch)
    }
}

export default connect(putStateToProps, putActionsToProps)(Contacts);