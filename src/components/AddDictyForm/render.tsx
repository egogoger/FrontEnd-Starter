import * as React from "react";

interface IProps {
    adding: boolean;
    category: string;
    language: string;
    title: string;
    onChange: any;
    onSubmit: any;
    onAdd: any;
}

function AddDictyFormRender(props: IProps) {
    if (props.adding) {
        return (
            <form onSubmit={props.onSubmit}>
                <input
                    name="language"
                    value={props.language}
                    type="text"
                    placeholder="Language"
                    onChange={props.onChange}
                />
                <input
                    name="title"
                    value={props.title}
                    type="text"
                    placeholder="Title"
                    onChange={props.onChange}
                />
                <input
                    name="category"
                    value={props.category}
                    type="text"
                    placeholder="Category"
                    onChange={props.onChange}
                />
                <input type="submit" value="Добавить" />
            </form>)
    } else {
        return (
            <div className="dictys__add" onClick={props.onAdd}>Добавить</div>
        )
    }
}

export default AddDictyFormRender;
