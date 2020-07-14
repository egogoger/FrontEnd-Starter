import * as React from 'react';
import './style.scss';

function PersonTableItemRender(props) {
    return (
        <tr className='person-table-item'>
            <td>{props.name}</td>
            <td>{props.surname}</td>
            <td onClick={props.onClick}>&#215;</td>
        </tr>
    )
}

export default PersonTableItemRender;
