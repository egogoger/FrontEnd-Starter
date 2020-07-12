import './style.scss';
import View from 'Core/view';
import Footer from 'Components/Footer/view';
import PersonInputRender from 'Components/PersonInput/view';

class DemoView extends View {
    constructor() {
        super();
    }

    public render(): string {
        return `
<div class='page'>
    <div class="demo">
        <h1>Demo</h1>
        ${PersonInputRender()}
<!--        <PersonTable />-->
<!--        <PersonTableButton />-->
    </div>
    ${Footer()}
</div>`
    }
}

export default DemoView;
