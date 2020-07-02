import * as React from 'react';
import './style.scss';

import AddWordFormRender from "./render";

interface IProps {}
interface IState {
    adding: boolean,
    orig: string,
    trans: string,
}

export default class AddWordForm extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            adding: false,
            orig: '',
            trans: '',
        };

        this.handleClickOnAdd = this.handleClickOnAdd.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    private handleClickOnAdd() {
        this.setState({
            adding: true,
            orig: '',
            trans: '',
        });
    }

    private handleSubmit() {
        this.setState({
            adding: false,
            orig: '',
            trans: '',
        });
    }

    // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/26635
    private handleInputChange(event) {
        const {name, value} = event.target;
        this.setState<never>({
            [name]: value
        })
    }

    render():JSX.Element {
        return (
            <AddWordFormRender
                handleClickOnAdd={this.handleClickOnAdd}
                handleSubmit={this.handleSubmit}
                handleInputChange={this.handleInputChange}
                {...this.state}
            />
        )
    }
};
