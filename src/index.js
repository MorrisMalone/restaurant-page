import pageLoad from './pageLoad';
import populateNav from './populateNav';
import render from './render';
//import initMap from './map'

pageLoad();
populateNav();

// add event listeners for the nav bar
const navElmts = document.querySelectorAll('.navElmt');

navElmts.forEach((elmt) => {
    elmt.addEventListener('click', (e) => {
        render(e);
    });
});

const backHome = document.getElementById('home');

backHome.addEventListener('click', (e) => {
    render(e);
});

// AIzaSyCtTE4CsEFryIS9wWHBthLCyfoa3j5W9oM

