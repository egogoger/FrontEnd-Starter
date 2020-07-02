import * as React from 'react';
import { connect } from 'react-redux';
import './style.scss';

import {Dicty} from "../../utils/interfaces";
import DictyTableRender from "./Render";
import { loadDictys } from "../../store/actions/Dicty";
import DictysModel from "../../models/dictys-model";

interface IProps {
    dictys?: Dicty[],
    loadDictys: Function,
}
interface IState {
    loading: boolean,
}

class DictyTable extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            loading: true,
        };
        props.loadDictys(DictysModel.instance.getDictys());

        this.getDictys = this.getDictys.bind(this);
        setTimeout(() => this.getDictys(), 2000);
    }

    private async getDictys() {
        this.setState({
            loading: false
        });
    }

    render() {
        return (
            <DictyTableRender
                dictys={this.props.dictys}
                {...this.state}/>
        )
    }
}

const mapStateToProps = state => ({
    dictys: state.dictys
});

export default connect(mapStateToProps, {loadDictys})(DictyTable);
