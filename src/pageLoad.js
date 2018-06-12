// function to create the squeletton of the page

const pageLoad = function() {
    const mainContainer = document.getElementById('mainContainer');
    //create header
    const header = document.createElement('header');
    //create logo/name of the restaurant
    const restaurantName = document.createElement('div');
    restaurantName.setAttribute('id', 'home');
    restaurantName.classList.add('centered');
    restaurantName.classList.add('logo');
    restaurantName.textContent = 'Chez Maurice';
    //create navigation bar
    const navContainer = document.createElement('nav');
    navContainer.setAttribute('id', 'navBar');

    header.appendChild(restaurantName);
    header.appendChild(navContainer);
    // create area to display the content from each section of the navigation bar
    const contentToDisplay = document.createElement('div');
    contentToDisplay.setAttribute('id', 'content');

    // create content for the first load of the page
    const content = document.createElement('div');
    content.classList.add('content');
    content.innerHTML = `<img class="resize" src="home.jpg" alt="View of a set table inside a restaurant">`
    contentToDisplay.appendChild(content);

    mainContainer.appendChild(header);
    mainContainer.appendChild(contentToDisplay);

};

export default pageLoad;