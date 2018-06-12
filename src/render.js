const render = function(e) {
    const container = document.getElementById('content');

    const title = document.createElement('h3');
    title.classList.add('titleContent');

    const content = document.createElement('div');
    content.classList.add('content');

    switch(e.target.id) {
        case 'home':
        content.innerHTML = '<img class="resize" src="home.jpg" alt="View of a set table inside a restaurant">';
        break;

        case 'menu':
        title.innerHTML = menuContent.title;
        content.innerHTML = menuContent.text;
        break;

        case 'contact':
        title.innerHTML = contactContent.title;
        content.innerHTML = contactContent.text;
        break;

        case 'findUs':
        title.innerHTML = findUs.title;
        content.classList.add('shadowBox');
        content.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2511.848736630555!2d11.015089099999996!3d50.98198650000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a4728fac717333%3A0x0!2zNTDCsDU4JzU1LjIiTiAxMcKwMDAnNTQuMyJF!5e0!3m2!1sfr!2sde!4v1528748527142" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
    }

    //suppress any child in the container
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    };

    container.appendChild(title);
    container.appendChild(content);
};

const menuContent = {
    title: 'the Menu',
    text: 'this is the menu'
};

const contactContent = {
    title: 'Contacts',
    text: 'Adresse: Albrechstrasse 34, Erfurt, Germany</br>Tel: 01232103901293'
}

const findUs = {
    title: 'You can find us just here',
    text: 'Here we are'
}

export default render;