class Router {
    controllers;
    current;

    constructor() {
        this.controllers = new Map();
        this.current = null;
    }

    addRoute(path, page) {
        this.controllers.set(path, page);
    }

    route() {
        window.addEventListener('popstate', this.redirect.bind(this));
        this.redirect();
    }

    redirect(path = window.location.pathname) {
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
