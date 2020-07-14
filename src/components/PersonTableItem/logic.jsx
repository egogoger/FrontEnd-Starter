import * as React from 'react';
import { connect } from 'react-redux';

import PersonTableItemRender from 'Components/PersonTableItem/render';
import { removePerson } from 'Actions/Person';
import PersonModel from 'src/models/PersonModel';

class PersonTableItem extends React.Component {
    constructor(props) {
        super(props);

        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick() {
        this.props.removePerson({name: this.props.name, surname: this.props.surname});
        PersonModel.instance.savePersons();
    }

    render() {
        return (
            <PersonTableItemRender
                name={this.props.name}
                surname={this.props.surname}
                onClick={this.handleOnClick}/>
        );
    }
}

export default connect(null, { removePerson })(PersonTableItem);
