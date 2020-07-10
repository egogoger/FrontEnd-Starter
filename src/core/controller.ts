import {removeAllChildrenFrom} from 'Utils/htmlHelpers';
import View from 'Core/view';

type eListener = EventListenerOrEventListenerObject;

class Controller {
    listeners: Map<string, eListener>;
    base: Element;
    view: View;

    constructor(base: Element) {
        this.listeners = new Map<string, eListener>();
        this.base = base;
    }

    public showSelf(): void {
        removeAllChildrenFrom(this.base);
        this.base.insertAdjacentHTML('afterbegin', this.view.render());
        this.addAllListeners();
    }

    public hideSelf(): void {
        this.removeAllListeners();
        removeAllChildrenFrom(this.base);
    }

    protected addAllListeners(): void {}

    protected addListener(node: Element, type: string, handler: eListener): void {
        const key = this.createKey(node, type, handler);
        this.listeners.set(key, handler);
    }

    protected removeListener(node: Element, type: string, handler: eListener): void {
        const key = this.createKey(node, type, handler);
        this.listeners.delete(key);
    }

    protected removeAllListeners(): void {
        this.listeners.clear();
    }

    private createKey(node: Element, type: string, handler: eListener) {
        return node.className + type + handler.toString();
    }
}

export default Controller;
