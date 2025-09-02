import pizzaImage from './img/pizza.jpg';

const loadMenuPage = () => {
    const divContent = document.getElementById("content");

    const titleH1 = document.createElement("h1");
    titleH1.innerText = "Our Pizzas";
    divContent.appendChild(titleH1);


    const tripleColumnGrid = document.createElement("div");
    tripleColumnGrid.classList.add("triple-column-grid");

    for (let i = 0; i < 9; i++) {
        const foodCard = document.createElement("div");
        foodCard.classList.add("food-card");

        const fcH2 = document.createElement("h2");
        fcH2.innerText = "Margeherita";
        foodCard.appendChild(fcH2);

        const fcImage = document.createElement("img");
        fcImage.src = pizzaImage;
        foodCard.appendChild(fcImage);

        const fcPrice = document.createElement("p");
        fcPrice.classList.add("price");
        fcPrice.innerText = "£12.99";
        foodCard.appendChild(fcPrice);

        const fcDescription = document.createElement("p");
        fcDescription.classList.add("description");
        fcDescription.innerText = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis ea dolores saepe non autem dolorem mollitia possimus vero, voluptatibus consectetur hic. Facere, qui quasi nemo provident eveniet obcaecati nihil soluta!`;
        foodCard.appendChild(fcDescription);

        const fcButton = document.createElement("button");
        fcButton.innerText = "Add to Cart";
        foodCard.appendChild(fcButton);

        tripleColumnGrid.appendChild(foodCard);
    }

    divContent.appendChild(tripleColumnGrid);
};

export {loadMenuPage};