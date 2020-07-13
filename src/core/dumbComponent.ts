class DumbComponent {
    protected vDOM: Record<string, Element>;

    constructor() {
        this.vDOM = {};
    }

    didRender(): void {
        // Do sth here
    }

    setvDOM(): void {
        // Find all parts of the component
    }

    render(): string {
        // return html
        return '';
    }
}

export default DumbComponent;
