import * as React from 'react';
import './style.scss';

import Footer from 'Components/Footer/render';
import PersonInputRender from 'Components/PersonInput/logic';
import PersonTable from 'Components/PersonTable/logic';

function DemoPage():JSX.Element {
    return (
        <div className="page">
            <div className="demo">
                <h1>Demo</h1>
                <PersonInputRender />
                <PersonTable />
                {/*<Button />*/}
            </div>
            <Footer />
        </div>
    );
}

export default DemoPage;
