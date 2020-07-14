import {CONST} from 'Utils/constants';
import ForkIcon from 'Static/icons/fork.svg';
import IssueIcon from 'Static/icons/issue.svg';

const Data = {
    Setups: [
        {
            stack: [CONST.TECH.REACT, CONST.TECH.REDUX, CONST.TECH.TS],
            link: 'https://github.com/EgorBedov/FrontEnd-Starter/tree/React-Redux-TS'
        },
        {
            stack: [CONST.TECH.TS],
            link: 'https://github.com/EgorBedov/FrontEnd-Starter/tree/TS'
        },
        {
            stack: [CONST.TECH.JS],
            link: 'https://github.com/EgorBedov/FrontEnd-Starter/tree/JS'
        },
    ],
    Contributions: [
        {
            icon: ForkIcon,
            title: 'Fork',
            link: 'https://github.com/EgorBedov/FrontEnd-Starter',
            message: 'Fork this repository to submit new setups and improvements'
        },
        {
            icon: IssueIcon,
            title: 'Issue',
            link: 'https://github.com/EgorBedov/FrontEnd-Starter/issues/new',
            message: 'Found a bug or error - create an issue dedicated to it'
        }
    ],
};

export default Data;
