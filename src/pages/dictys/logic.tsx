import * as React from 'react';

import DictysPageRender from "./render";
import {Dicty} from "../../utils/interfaces";
import DictysModel from "../../models/dictys-model";


interface IProps {}
interface IState {
    addWordForm: {
        adding: boolean,
        language: string,
        title: string,
        category: string,
    },
    dictyTable: {
        loading: boolean,
        dictys: Dicty[],
    }
}

export default class DictysPage extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            addWordForm: {
                adding: false,
                language: '',
                title: '',
                category: '',
            },
            dictyTable: {
                loading: true,
                dictys: [],
            }
        };

        this.handleClickOnAdd = this.handleClickOnAdd.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.updateDictys = this.updateDictys.bind(this);
        setTimeout(() => this.updateDictys(), 2000);
    }

    render() {
        return (
            <DictysPageRender
                handleClickOnAdd={this.handleClickOnAdd}
                handleSubmit={this.handleSubmit}
                handleInputChange={this.handleInputChange}
                {...this.state}/>
        );
    }

    /**************************************
                 Add Word Form
     *************************************/

    private handleClickOnAdd() {
        this.setState({
            addWordForm: {
                adding: true,
                language: '',
                title: '',
                category: '',
            }
        });
    }

    private handleSubmit() {
        let dicty: Dicty = {
            lang: this.state.addWordForm.language,
            title: this.state.addWordForm.title,
            category: Array.from(this.state.addWordForm.category),
            words: []
        };
        DictysModel.instance.createDicty(dicty)
            .then(() => this.updateDictys());
        this.setState({
            addWordForm: {
                adding: false,
                language: '',
                title: '',
                category: '',
            }
        });
    }

    private handleInputChange(event) {
        const {name, value} = event.target;
        this.setState(prevState => ({
            addWordForm: {
                ...prevState.addWordForm,
                [name]: value
            }
        }));
    }

    /**************************************
                  Dicty Table
     *************************************/

    private async updateDictys() {
        this.setState({
            dictyTable: {
                dictys: DictysModel.instance.getDictys(),
                loading: false
            }
        });
    }
};
