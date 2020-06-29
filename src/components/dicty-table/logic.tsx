import * as React from 'react';
import DictyTableItem from "../dicty-table-item/component";
import './style.scss';
import {Dicty} from "../../utils/interfaces";
import DictysModel from "../../models/dictys-model";
import DictyTableRender from "./render";

interface IProps {}
interface IState {
    loading: boolean,
    dictys: Dicty[],
}

export default class DictyTable extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            loading: true,
            dictys: [],
        };
        this.getDictys = this.getDictys.bind(this);
        setTimeout(() => this.getDictys(), 2000);
    }

    private async getDictys() {
        this.setState({
            dictys: DictysModel.instance.getDictys().map(item => <DictyTableItem key={item.lang + item.title}
                                                                                  lang={item.lang}
                                                                                  title={item.title}
                                                                                  category={item.category}/>),
            loading: false
        });
    }

    render() {
        return (
            <DictyTableRender {...this.state}/>
        )
    }
};
