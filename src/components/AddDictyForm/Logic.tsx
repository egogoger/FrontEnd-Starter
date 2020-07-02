import * as React from 'react';
import { connect } from 'react-redux';
import './style.scss';

import {Dicty} from "../../utils/interfaces";
import DictysModel from "../../models/dictys-model";
import AddDictyFormRender from "./Render";
import {addDicty} from "../../store/actions/Dicty";

interface IProps {
    addDicty: Function,
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
        let dicty: Dicty = {
            lang: this.state.language,
            title: this.state.title,
            category: Array.from(this.state.category),
            words: []
        };
        this.props.addDicty(dicty);
        DictysModel.instance.createDicty(dicty);
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

    render() {
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
