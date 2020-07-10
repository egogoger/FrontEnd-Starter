class Controller {
    listeners: Map<string, Function>;

    constructor() {

    }

    public showSelf() {

    }

    public hideSelf() {

    }

    protected addListener(node: HTMLElement, type: string, handler: Function): void {
        let key = this.createKey(node, type, handler);
        this.listeners.set(key, handler);
    }

    protected removeListener(node: HTMLElement, type: string, handler: Function): void {
        let key = this.createKey(node, type, handler);
        this.listeners.delete(key);
    }

    protected removeAllListeners(): void {
        this.listeners.clear();
    }

    private createKey(node: HTMLElement, type: string, handler: Function) {
        return node.className + type + handler.toString();
    }
}

export default Controller;
