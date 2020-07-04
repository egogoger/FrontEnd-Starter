import * as React from 'react';
import './style.scss';
import { Person } from 'Interfaces';

class PersonTableItem extends React.Component<Person> {
    constructor(props:Person) {
        super(props);
    }

    render():JSX.Element {
        return (
            <tr className='person-table-item'>
                <td>{this.props.name}</td>
                <td>{this.props.surname}</td>
            </tr>
        )
    }
}

export default PersonTableItem;
