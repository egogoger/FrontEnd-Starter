import Controller from 'Core/controller';

class Router {
    controllers: Map<string, Controller>;
    current: Controller;

    constructor() {
        this.controllers = new Map();
        this.current = null;
    }

    addRoute(path: string, page: Controller): void {
        this.controllers.set(path, page);
    }

    route(): void {
        window.addEventListener('popstate', this.redirect.bind(this));
        this.redirect();
    }

    public redirect(path: string = window.location.pathname): void {
        if (this.current) {
            this.current.hideSelf();
        }

        const controller = this.controllers.get(path);
        if (!controller) {
            path = '404';
        }
        this.current = this.controllers.get(path);
        window.history.pushState({}, path, window.location.origin + path);
        this.current.showSelf();
    }
}

export default Router;
