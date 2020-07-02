import * as React from 'react';
import { connect } from 'react-redux';
import './style.scss';

import {Dicty} from 'Interfaces';
import DictyTableRender from './render';
import { loadDictys } from 'Actions/Dicty';
import DictyModel from 'Models/DictyModel';

// TODO: move it somewhere
interface ILoadDictys {
    (dictys: Dicty[]): void
}

interface IProps {
    dictys?: Dicty[],
    loadDictys: ILoadDictys,
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
        props.loadDictys(DictyModel.instance.getDictys());

        this.getDictys = this.getDictys.bind(this);
        setTimeout(() => this.getDictys(), 2000);
    }

    private async getDictys() {
        this.setState({
            loading: false
        });
    }

    render():JSX.Element {
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
