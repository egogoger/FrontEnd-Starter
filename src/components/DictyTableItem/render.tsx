import * as React from 'react';
import './style.scss';

interface IProps {
    lang: string,
    title: string,
    category: string
}

class DictyTableItem extends React.Component<IProps> {
    constructor(props:IProps) {
        super(props);
    }

    render():JSX.Element {
        return (
            <tr className="dicty-table-item">
                <td>{this.props.lang}</td>
                <td>{this.props.title}</td>
                <td>{this.props.category}</td>
            </tr>
        )
    }
}

export default DictyTableItem;
