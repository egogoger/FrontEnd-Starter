import * as React from 'react';
import { connect } from 'react-redux';

import { Person } from 'Interfaces';
import PersonInputRender from './render';
import { addPerson } from 'Actions/Person';
import PersonModel from 'Models/PersonModel';

type IProps = {
    addPerson(person: Person): void,
}

class PersonInput extends React.Component<IProps, Person> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            name: '',
            surname: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    private handleSubmit(e) {
        e.preventDefault();
        if (this.state.name.length === 0 || this.state.surname.length === 0) {
            return;
        }
        const person: Person = {
            name: this.state.name,
            surname: this.state.surname,
        };
        this.props.addPerson(person);
        Promise.all([
            PersonModel.instance.savePersons(),
            // TODO: Show loading
        ]).then(() => {
            this.setState({
                name: '',
                surname: '',
            });
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
            <PersonInputRender
                onSubmit={this.handleSubmit}
                onChange={this.handleInputChange}
                {...this.state}
            />
        )
    }
}

export default connect(null, { addPerson })(PersonInput);
