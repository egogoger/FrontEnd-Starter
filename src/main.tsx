import './main.scss';

import Router from './core/router';
import HomePage from 'Pages/Home/controller';

const base = document.querySelector('#application');

const router = new Router();
router.addRoute('/', new HomePage(base));
router.route();
