import * as React from 'react';
import './style.scss';

import SetupsList from 'Components/SetupsList/render';
import Footer from 'Components/Footer/render';
import { CONST } from 'Constants';

function SetupsPage():JSX.Element {
    return (
        <div className='page'>
            <div className="setups">
                <h1>Setups</h1>
                <SetupsList
                    setups={[
                        {
                            stack: [CONST.TECH.REACT, CONST.TECH.REDUX, CONST.TECH.TS],
                            link: 'https://github.com/EgorBedov/FrontEnd-Setup/tree/React-Redux-TS',
                        },
                    ]}/>
            </div>
            <Footer />
        </div>
    );
}

export default SetupsPage;
