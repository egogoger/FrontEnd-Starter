import * as React from 'react';
import { connect } from 'react-redux';

import PersonTableButton from './render';
import { clearPersons } from 'Actions/Person';
import PersonModel from 'src/models/PersonModel';

class PersonTableItem extends React.Component {
    constructor(props) {
        super(props);

        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick() {
        this.props.clearPersons();
        PersonModel.instance.savePersons();
    }

    render() {
        return (
            <PersonTableButton onClick={this.handleOnClick}/>
        );
    }
}

export default connect(null, { clearPersons })(PersonTableItem);
