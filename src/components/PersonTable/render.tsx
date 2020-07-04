import * as React from 'react';
import './style.scss';

import PersonTableItem from 'Components/PersonTableItem/render';
import { Person } from 'Interfaces';

interface IProps {
    loading: boolean,
    persons: Person[],
}

function PersonTableRender(props: IProps):JSX.Element {
    return (
        <table className='person-table'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {props.loading
                    ? <tr>
                        <th>Loading...</th>
                        <th>Loading...</th>
                        <th>Loading...</th>
                    </tr>
                    : props.persons.map(item =>
                        <PersonTableItem
                            key={item.name + item.surname}
                            name={item.name}
                            surname={item.surname}/>)}
            </tbody>
        </table>
    )
}

export default PersonTableRender;
