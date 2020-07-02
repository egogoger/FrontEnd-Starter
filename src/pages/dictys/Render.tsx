import * as React from 'react';
import './style.scss';

import Navigator from "../../components/Navigator/Render";
import AddDictyInput from "../../components/AddDictyForm/Logic";
import DictyTable from "../../components/DictyTable/Logic";

function DictysPage() {
    return (
        <div className="dictys">
            <h1>Dictys page</h1>
            <AddDictyInput />
            <DictyTable />
            <hr className="home__hr"/>
            <Navigator />
        </div>
    );
}

export default DictysPage;
