import * as React from 'react';

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
                    <th>Language</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {props.loading
                    ? <tr>
                        <th>Loading...</th>
                        <th></th>
                        <th></th>
                        <th></th>
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
