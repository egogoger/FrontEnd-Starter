import Controller from 'Core/controller';

class Router {
    controllers: Map<string, Controller>;
    current: Controller;

    constructor() {
        this.controllers = new Map();
        this.current = null;
    }

    addRoute(path: string, page: Controller) {
        this.controllers.set(path, page);
    }

    route() {
        window.addEventListener('popstate', () => {
            this.redirect(window.location.pathname);
        });
    }

    private redirect(path: string) {
        this.current.hideSelf();

        let controller = this.controllers.get(path);
        if (!controller) {
            path = '404';
            this.current = this.controllers.get('404');
        }
        
        window.history.pushState({}, path, window.location.origin + path);

        this.current.showSelf();
    }
}

export default Router;
