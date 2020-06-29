import * as React from 'react';
import './style.scss';

import AddDictyFormRender from "../../components/add-dicty-form/render";
import Navigator from "../../components/navigator/navigator";
import DictyTableRender from "../../components/dicty-table/render";
import {Dicty} from "../../utils/interfaces";

interface IProps {
    addWordForm: {
        adding: boolean,
        language: string,
        title: string,
        category: string,
    }
    handleClickOnAdd: any,
    handleInputChange: any,
    handleSubmit: any,
    dictyTable: {
        loading: boolean,
        dictys: Dicty[],
    }
}

export default function DictysPageRender(props: IProps) {
    return (
        <div className="dictys">
            <h1>Dictys page</h1>
            <AddDictyFormRender
                adding={props.addWordForm.adding}
                language={props.addWordForm.language}
                title={props.addWordForm.title}
                category={props.addWordForm.category}
                onChange={props.handleInputChange}
                onSubmit={props.handleSubmit}
                onAdd={props.handleClickOnAdd}/>
            <DictyTableRender
                loading={props.dictyTable.loading}
                dictys={props.dictyTable.dictys}/>
            <hr className="home__hr"/>
            <Navigator />
        </div>
    );
}
