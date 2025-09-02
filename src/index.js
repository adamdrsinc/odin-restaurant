import "./css/main.css";
import {loadHomePage} from "./loadHomePage.js";
import {loadMenuPage} from "./loadMenuPage.js";
import {loadAboutPage} from "./loadAboutPage.js";

(()=> {

    function resetContentDiv(){
        document.getElementById('content').innerHTML = ``;
    }

    const homeButton = document.getElementById('home-button');
    const menuButton = document.getElementById('menu-button');
    const aboutButton = document.getElementById('about-button');

    homeButton.addEventListener('click', () => {
        resetContentDiv();
        loadHomePage();
    });

    menuButton.addEventListener('click', () => {
        resetContentDiv();
        loadMenuPage();
    });

    aboutButton.addEventListener('click', () => {
        resetContentDiv();
        loadAboutPage();
    });

})();


homePageLoad();