import './style.scss';

function PersonInputRender(): string {
    return `
<form class='person-input'>
    <input
        name='name'
        type='text'
        placeholder='Name'
    />
    <input
        name='surname'
        type='text'
        placeholder='Surname'
    />
    <input type='submit' value='Add' />
</form>`
}

export default PersonInputRender;
