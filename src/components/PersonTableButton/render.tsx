import * as React from 'react';
import './style.scss';

type IProps = {
    onClick(): void,
}

function PersonTableButton(props:IProps):JSX.Element {
    return (
        <div className='person-table-button'>
            <div className='person-table-button__icon' onClick={props.onClick}>&#215;</div>
            <label className='person-table-button__label'>Remove all persons</label>
        </div>
    );
}

export default PersonTableButton;
