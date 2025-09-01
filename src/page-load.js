const pageLoad = () => {
    const divContent = document.getElementById("content");
    console.log(divContent);

    const firstSection = document.createElement("div");
    firstSection.classList.add("section", "first");

    const fsLeftColumn = document.createElement("div");
    fsLeftColumn.classList.add("left-column");

    const fsLeftColumnH1 = document.createElement("h1");
    fsLeftColumnH1.innerText = "Welcome to Pizza Restaurant!";
    const fsLeftColumnP1 = document.createElement("p");
    fsLeftColumnP1.innerText = `Located under the famous Chester Rows on Watergate Street, Stile Napoletano at 49 Watergate Street is the second venue of award-winning pizza chef Giacomo Guido.
    Giacomo left his home on the island of Ischia, near Naples and moved to London where he was nominated for the best pizza in London in 2015 (youngandfoodish.com) and his pizza was included in Daniel Young’s ‘Where to Eat Pizza’ in 2016. 2017 brought more success when Giacomo won the London Pizza Festival.
    After visiting Chester, Giacomo fell in love with the city and decided to leave his successful career in London behind. Stile Napoletano was opened in March 2018 where he serves tasty and light Neapolitan style pizzas using pure, organic ingredients from Italy alongside quality local produce.`;
    const fsLeftColumnP2 = document.createElement("p");
    fsLeftColumnP2.innerText = `After visiting Chester, Giacomo fell in love with the city and decided to leave his successful career in London behind. Stile Napoletano was opened in March 2018 where he serves tasty and light Neapolitan style pizzas using pure, organic ingredients from Italy alongside quality local produce.`;
    const fsLeftColumnP3 = document.createElement("p");
    fsLeftColumnP3.innerText = `After visiting Chester, Giacomo fell in love with the city and decided to leave his successful career in London behind. Stile Napoletano was opened in March 2018 where he serves tasty and light Neapolitan style pizzas using pure, organic ingredients from Italy alongside quality local produce.`;

    fsLeftColumn.appendChild(fsLeftColumnH1);
    fsLeftColumn.appendChild(fsLeftColumnP1);
    fsLeftColumn.appendChild(fsLeftColumnP2);
    fsLeftColumn.appendChild(fsLeftColumnP3);
    //Left Column Complete

    const fsRightColumn = document.createElement("div");
    fsRightColumn.classList.add("right-column");
    fsRightColumn.innerHTML = `<img id="intro-image" src="./img/pizza.jpg" alt="A picture of a margherita pizza with a sourdough crust on top of a wooden board.">`;
    
    firstSection.appendChild(fsLeftColumn);
    firstSection.appendChild(fsRightColumn);

    divContent.appendChild(firstSection);


    const tripleColumnGrid = document.createElement("div");
    tripleColumnGrid.classList.add("triple-column-grid");

    for (let i = 0; i < 3; i++) {
        const foodCard = document.createElement("div");
        foodCard.classList.add("food-card");

        const fcH2 = document.createElement("h2");
        fcH2.innerText = "Margeherita";
        foodCard.appendChild(fcH2);

        const fcImage = document.createElement("img");
        fcImage.src = "./img/pizza.jpg";
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

export {pageLoad};