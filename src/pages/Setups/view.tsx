import './style.scss';
import View from 'Core/view';
import Footer from 'Components/Footer/view';
import SetupsList from 'Components/SetupsList/view';
import Data from 'Static/data';

class SetupsView extends View {
    constructor() {
        super();
    }

    public render(): string {
        return `<div class='page'>
    <div class="setups">
        <h1>Setups</h1>
        ${SetupsList(Data.Setups)}
    </div>
    ${Footer()}
</div>`
    }
}

export default SetupsView;
