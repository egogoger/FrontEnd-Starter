import {removeAllChildrenFrom} from 'Utils/htmlHelpers';

class Controller {
    constructor(parent) {
        this.listeners = new Map();
        this.components = new Map();
        this.parent = parent;
    }

    showSelf() {
        if (this.parent) {
            removeAllChildrenFrom(this.parent);
        }
        this.parent.insertAdjacentHTML('afterbegin', this.view.constructor.HTML);
        this.controllerDidMount();
    }

    hideSelf() {
        this.removeAllListeners();
        removeAllChildrenFrom(this.parent);
    }

    controllerDidMount() {
        this.view.didRender();
        for (const comp of this.components.values()) {
            comp.controllerDidMount();
        }
    }

    addListener(node, type, handler) {
        node.addEventListener(type, handler);
        const key = Controller.createKey(node, type, handler);
        this.listeners.set(key, handler);
    }

    removeListener(node, type, handler) {
        node.removeEventListener(type, handler);
        const key = Controller.createKey(node, type, handler);
        this.listeners.delete(key);
    }

    removeAllListeners() {
        this.listeners.clear();
    }

    static createKey(node, type, handler) {
        return node.className + type + handler.toString();
    }
}

export default Controller;
