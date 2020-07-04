import * as React from 'react';
import { connect } from 'react-redux';
import './style.scss';

import { Person } from 'Interfaces';
import PersonTableRender from './render';
import { loadPersons, removePerson } from 'Actions/Person';
import PersonModel from 'Models/PersonModel';

interface IProps {
    persons?: Person[],
    loadPersons(persons: Person[]): void,
    removePerson(person: Person): void,
}
interface IState {
    loading: boolean,
}

class PersonTable extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            loading: true,
        };
        PersonModel.instance.loadPersons().then(persons => {
            props.loadPersons(persons);
        });

        this.getPersons = this.getPersons.bind(this);
        setTimeout(() => this.getPersons(), 2000);
    }

    private async getPersons() {
        this.setState({
            loading: false
        });
    }

    render():JSX.Element {
        return (
            <PersonTableRender
                persons={this.props.persons}
                onClick={this.props.removePerson}
                {...this.state}/>
        )
    }
}

const mapStateToProps = state => ({
    persons: state.persons
});

export default connect(mapStateToProps, { loadPersons, removePerson })(PersonTable);
