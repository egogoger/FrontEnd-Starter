class View {
    vDOM;

    // abstract static get would be perfect here
    static HTML = '';

    // Ideally constructor should require
    // an ID to find this exact element
    constructor() {
        this.vDOM = {
            self: null,
        };
    }

    didRender() {
        this.setvDOM();
    }

    setvDOM() {}
}

export default View;
