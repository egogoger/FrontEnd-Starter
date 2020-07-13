import DumbComponent from 'Core/dumbComponent';

class SmartComponent {
    dumb: DumbComponent;

    didRender(): void {
        this.dumb.setvDOM();
    }
}

export default SmartComponent;
