import './main.scss';

import Router from 'Core/router';
import HomePage from 'Pages/Home/controller';
import SetupsPage from 'Pages/Setups/controller';
import ContributePage from 'Pages/Contribute/controller';
import DemoPage from 'Pages/Demo/controller';

const base = document.querySelector('#application');

const router = new Router();
router.addRoute('/', new HomePage(base));
router.addRoute('/setups', new SetupsPage(base));
router.addRoute('/contribute', new ContributePage(base));
router.addRoute('/demo', new DemoPage(base));
router.route();
