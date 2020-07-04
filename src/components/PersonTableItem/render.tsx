import * as React from 'react';
import './style.scss';

import { Person } from 'Interfaces';

type IProps = Person & {
    onClick(person: Person): void,
}

class PersonTableItem extends React.Component<IProps> {
    constructor(props:IProps) {
        super(props);

        this.handleOnClick = this.handleOnClick.bind(this);
    }

    private handleOnClick() {
        console.log(this.props);
        this.props.onClick({name: this.props.name, surname: this.props.surname});
    }

    render():JSX.Element {
        return (
            <tr className='person-table-item'>
                <td>{this.props.name}</td>
                <td>{this.props.surname}</td>
                <td className='person-table-item' onClick={this.handleOnClick}>&#215;</td>
            </tr>
        )
    }
}

export default PersonTableItem;
