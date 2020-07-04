import * as React from 'react';
import { connect } from 'react-redux';

import PersonTableButton from './render';
import { clearPersons } from 'Actions/Person';
import PersonModel from 'Models/PersonModel';

type IProps = {
    clearPersons(): void,
}

class PersonTableItem extends React.Component<IProps> {
    constructor(props:IProps) {
        super(props);

        this.handleOnClick = this.handleOnClick.bind(this);
    }

    private handleOnClick() {
        this.props.clearPersons();
        PersonModel.instance.savePersons();
    }

    render():JSX.Element {
        return (
            <PersonTableButton onClick={this.handleOnClick}/>
        );
    }
}

export default connect(null, { clearPersons })(PersonTableItem);
