import * as React from 'react';
import { connect } from 'react-redux';

import { Person } from 'Interfaces';
import PersonTableItemRender from 'Components/PersonTableItem/render';
import { removePerson } from 'Actions/Person';
import PersonModel from 'Models/PersonModel';

type IProps = Person & {
    removePerson(person: Person): void,
}

class PersonTableItem extends React.Component<IProps> {
    constructor(props:IProps) {
        super(props);

        this.handleOnClick = this.handleOnClick.bind(this);
    }

    private handleOnClick() {
        this.props.removePerson({name: this.props.name, surname: this.props.surname});
        PersonModel.instance.savePersons();
    }

    render():JSX.Element {
        return (
            <PersonTableItemRender
                name={this.props.name}
                surname={this.props.surname}
                onClick={this.handleOnClick}/>
        );
    }
}

export default connect(null, { removePerson })(PersonTableItem);
