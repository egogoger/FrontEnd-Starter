import * as React from 'react';
import './style.scss';

import Footer from 'Components/Footer/render';
import AddDictyInput from 'Components/AddDictyForm/logic';
import DictyTable from 'Components/DictyTable/logic';

function DictysPage():JSX.Element {
    return (
        <div className="dictys">
            <h1>Dictys page</h1>
            <AddDictyInput />
            <DictyTable />
            <hr className="home__hr"/>
            <Footer />
        </div>
    );
}

export default DictysPage;
