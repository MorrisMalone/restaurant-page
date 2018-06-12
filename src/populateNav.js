const populateNav = function() {
    const navBar = document.getElementById('navBar');

    const menu = document.createElement('div');
    menu.setAttribute('id', 'menu');
    menu.classList.add('centered', 'navElmt');
    menu.textContent = 'Menu';

    const contact = document.createElement('div');
    contact.setAttribute('id', 'contact');
    contact.classList.add('centered', 'navElmt');
    contact.textContent = 'Contact';

    const map = document.createElement('div');
    map.setAttribute('id', 'findUs');
    map.classList.add('centered', 'navElmt');
    map.textContent = 'Find Us';

    navBar.appendChild(menu);
    navBar.appendChild(contact);
    navBar.appendChild(map);
}

export default populateNav;