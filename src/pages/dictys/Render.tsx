import * as React from 'react';
import './style.scss';

import Navigator from "../../components/navigator/navigator";
import AddDictyInput from "../../components/add-dicty-form/Logic";
import DictyTable from "../../components/DictyTable/Logic";

interface IProps {}

function DictysPage(props: IProps) {
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
