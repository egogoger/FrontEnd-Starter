abstract class View {
    protected vDOM: Record<string, Element>;

    // abstract static get would be perfect here
    static HTML = '';

    // Ideally constructor should require
    // an ID to find this exact element
    protected constructor() {
        this.vDOM = {
            self: null,
        };
    }

    public didRender(): void {
        this.setvDOM();
    }

    abstract setvDOM(): void;
}

export default View;
