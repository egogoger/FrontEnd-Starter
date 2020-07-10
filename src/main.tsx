import './main.scss';

import Router from './core/router';
import HomePage from 'Pages/Home/controller';

document.querySelector('#application');

const router = new Router();
router.addRoute('/', new HomePage());
router.route();
