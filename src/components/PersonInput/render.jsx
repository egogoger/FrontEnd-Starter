import * as React from 'react';
import './style.scss';

function PersonInputRender(props) {
    return (
        <form className='person-input' onSubmit={props.onSubmit}>
            <input
                name='name'
                value={props.name}
                type='text'
                placeholder='Name'
                onChange={props.onChange}
            />
            <input
                name='surname'
                value={props.surname}
                type='text'
                placeholder='Surname'
                onChange={props.onChange}
            />
            <input type='submit' value='Add' />
        </form>)
}

export default PersonInputRender;
