import * as React from 'react';

import { Person } from 'Interfaces';
import PersonTableItemRender from 'Components/PersonTableItem/render';

type IProps = Person & {
    onClick(person: Person): void,
}

class PersonTableItem extends React.Component<IProps> {
    constructor(props:IProps) {
        super(props);

        this.handleOnClick = this.handleOnClick.bind(this);
    }

    private handleOnClick() {
        this.props.onClick({name: this.props.name, surname: this.props.surname});
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

export default PersonTableItem;
