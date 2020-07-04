import * as React from 'react';
import './style.scss';

import Footer from 'Components/Footer/render';
import { Contribution } from 'Interfaces';
import ContributionRender from 'Components/Contribution/render';
import ForkIcon from 'Static/icons/fork.svg';
import IssueIcon from 'Static/icons/issue.svg';

function ContributionsPage():JSX.Element {
    const contributions: Contribution[] = [
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
    ];
    return (
        <div className='page'>
            <div className='contribute'>
                <h1>Contribute</h1>
                <div className="contribute__ways">
                    {contributions.map(c => <ContributionRender {...c} key={c.link}/>)}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ContributionsPage;
