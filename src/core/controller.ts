import {removeAllChildrenFrom} from 'Utils/htmlHelpers';
import View from 'Core/view';
import {IComponent} from 'Interfaces';

type eListener = EventListenerOrEventListenerObject;

class Controller {
    listeners: Map<string, eListener>;
    base: Element;
    view: View;
    components: Map<string, IComponent>;

    constructor(base: Element) {
        this.listeners = new Map<string, eListener>();
        this.base = base;
    }

    public showSelf(): void {
        removeAllChildrenFrom(this.base);
        this.base.insertAdjacentHTML('afterbegin', this.view.render());
        this.controllerDidMount();
    }

    public hideSelf(): void {
        this.removeAllListeners();
        removeAllChildrenFrom(this.base);
    }

    controllerDidMount(): void {
        for (const comp of this.components.values()) {
            comp.didRender();
        }
    }

    protected addListener(node: Element, type: string, handler: eListener): void {
        node.addEventListener(type, handler);
        const key = this.createKey(node, type, handler);
        this.listeners.set(key, handler);
    }

    protected removeListener(node: Element, type: string, handler: eListener): void {
        node.removeEventListener(type, handler);
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
