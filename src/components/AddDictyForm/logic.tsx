import * as React from 'react';
import { connect } from 'react-redux';
import './style.scss';

import { Dicty } from 'Interfaces';
import DictyModel from 'Models/DictyModel';
import AddDictyFormRender from './render';
import { addDicty } from 'Actions/Dicty';

interface IProps {
    addDicty(dicty: Dicty): void,
}

interface IState {
    adding: boolean,
    language: string,
    title: string,
    category: string,
}

class AddDictyForm extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            adding: false,
            language: '',
            title: '',
            category: '',
        };

        this.handleClickOnAdd = this.handleClickOnAdd.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    private handleClickOnAdd() {
        this.setState({
            adding: true,
            language: '',
            title: '',
            category: '',
        });
    }

    private handleSubmit() {
        if (this.state.title.length === 0 || this.state.language.length === 0) {
            return;
        }
        const dicty: Dicty = {
            lang: this.state.language,
            title: this.state.title,
            category: Array.from(this.state.category),
            words: []
        };
        this.props.addDicty(dicty);
        DictyModel.instance.createDicty(dicty);
        this.setState({
            adding: false,
            language: '',
            title: '',
            category: '',
        });
    }

    private handleInputChange(event) {
        const {name, value} = event.target;
        this.setState(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    render():JSX.Element {
        return (
            <AddDictyFormRender
                onSubmit={this.handleSubmit}
                onAdd={this.handleClickOnAdd}
                onChange={this.handleInputChange}
                {...this.state}
            />
        )
    }
}

export default connect(null, { addDicty })(AddDictyForm);
