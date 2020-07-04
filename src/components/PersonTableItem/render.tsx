import * as React from 'react';
import './style.scss';

import { Person } from 'Interfaces';

type IProps = Person & {
    onClick(): void,
}

function PersonTableItemRender(props: IProps):JSX.Element {
    return (
        <tr className='person-table-item'>
            <td>{props.name}</td>
            <td>{props.surname}</td>
            <td onClick={props.onClick}>&#215;</td>
        </tr>
    )
}

export default PersonTableItemRender;
