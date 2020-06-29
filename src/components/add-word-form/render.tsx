import * as React from "react";

export default function AddWordFormRender(props) {
    if (props.adding) {
        return (
            <form onSubmit={props.handleSubmit}>
                <input
                    name="orig"
                    value={props.orig}
                    type="text"
                    placeholder="Original"
                    onChange={props.handleInputChange}
                />
                <input
                    name="trans"
                    value={props.trans}
                    type="text"
                    placeholder="Translated"
                    onChange={props.handleInputChange}
                />
                <input type="submit" value="Добавить" />
            </form>)
    } else {
        return (
            <div className="dictys__add" onClick={props.handleClickOnAdd}>Добавить</div>
        )
    }
}
