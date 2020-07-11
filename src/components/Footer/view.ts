import './style.scss';

function Footer(): string {
    return `<div class='footer'>
    <div class='footer__list'>
        <a href='/' class='footer__link'>Home</a>
        <a href='/setups' class='footer__link'>Setups</a>
    </div>
    <a class='footer__avatar' href='https://github.com/EgorBedov' target='_blank' rel='noopener noreferrer'>
        <img src='https://avatars1.githubusercontent.com/u/55828280?s=60&u=cf6facefae0859de29544bea5db2be3a19d46bbc&v=4' alt='Author'/>
    </a>
    <div class='footer__list'>
        <a href='/demo' class='footer__link'>Demo</a>
        <a href='/contribute' class='footer__link'>Contribute</a>
    </div>
</div>`
}

export default Footer;
