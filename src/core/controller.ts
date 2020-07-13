import {removeAllChildrenFrom} from 'Utils/htmlHelpers';
import View from 'Core/view';

type eListener = EventListenerOrEventListenerObject;

abstract class Controller {
    view: View;
    parent: Element;
    listeners: Map<string, eListener>;
    components: Map<string, Controller>;

    protected constructor(parent?: Element) {
        this.listeners = new Map();
        this.components = new Map();
        this.parent = parent;
    }

    public showSelf(): void {
        if (this.parent) {
            removeAllChildrenFrom(this.parent);
        }
        const viewClass = <typeof View>this.view.constructor;
        this.parent.insertAdjacentHTML('afterbegin', viewClass.HTML);
        this.controllerDidMount();
    }

    public hideSelf(): void {
        this.removeAllListeners();
        removeAllChildrenFrom(this.parent);
    }

    public controllerDidMount(): void {
        this.view.didRender();
        for (const comp of this.components.values()) {
            comp.controllerDidMount();
        }
    }

    protected addListener(node: Element, type: string, handler: eListener): void {
        node.addEventListener(type, handler);
        const key = Controller.createKey(node, type, handler);
        this.listeners.set(key, handler);
    }

    protected removeListener(node: Element, type: string, handler: eListener): void {
        node.removeEventListener(type, handler);
        const key = Controller.createKey(node, type, handler);
        this.listeners.delete(key);
    }

    protected removeAllListeners(): void {
        // TODO: Basically we rely here on garbage collector
        //  to remove all the listeners
        //  Maybe use the view's vDOM to remove everything
        this.listeners.clear();
    }

    static createKey(node: Element, type: string, handler: eListener): string {
        return node.className + type + handler.toString();
    }
}

export default Controller;
