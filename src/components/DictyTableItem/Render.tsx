import * as React from 'react';
import './style.scss';

interface IProps {
    lang: string,
    title: string,
    category: string
}
interface IState {}

class DictyTableItem extends React.Component<IProps, IState> {
    constructor(props) {
        super(props);
    }

    render() {
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
