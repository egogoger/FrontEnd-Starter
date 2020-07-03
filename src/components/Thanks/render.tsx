import * as React from 'react';
import './style.scss';

function Thanks():JSX.Element {
    return (
        <div className='thanks'>
            <div className="thanks__message">
                <div className='thanks__message_first'>Thanks for using</div>
                <div className='thanks__message_second'>FrontEnd Setup 2020</div>
                <div className='thanks__message_third'>by Egor Bedov</div>
            </div>
        </div>
    );
}

export default Thanks;