import * as React from 'react';
import { Person } from 'Interfaces';

type IProps = Person & {
    onChange(event: React.ChangeEvent<HTMLInputElement>): void;
    onSubmit(): void;
}

function PersonInputRender(props: IProps):JSX.Element {
    return (
        <form onSubmit={props.onSubmit}>
            <input
                name="name"
                value={props.name}
                type="text"
                placeholder="name"
                onChange={props.onChange}
            />
            <input
                name="surname"
                value={props.surname}
                type="text"
                placeholder="Surname"
                onChange={props.onChange}
            />
            <input type="submit" value="Add" />
        </form>)
}

export default PersonInputRender;
