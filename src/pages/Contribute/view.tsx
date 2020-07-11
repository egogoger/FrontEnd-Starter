import './style.scss';
import View from 'Core/view';
import Footer from 'Components/Footer/view';
import Data from 'Static/data';
import Contribution from 'Components/Contribution/view';

class ContributesView extends View {
    constructor() {
        super();
    }

    public render(): string {
        return `
<div class='page'>
    <div class='contribute'>
        <h1>Contribute</h1>
        <div class="contribute__ways">
            ${Data.Contributions.reduce((output, c) => output + Contribution(c), '')}
        </div>
    </div>
    ${Footer()}
</div>`
    }
}

export default ContributesView;
