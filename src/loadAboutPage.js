const loadAboutPage = () => {
    const divContent = document.getElementById("content");

    const firstSection = document.createElement("div");
    firstSection.classList.add("section", "first");

    const fsLeftColumn = document.createElement("div");
    fsLeftColumn.classList.add("left-column");

    const fsLeftColumnH1 = document.createElement("h1");
    fsLeftColumnH1.innerText = "About";
    const fsLeftColumnP1 = document.createElement("p");
    fsLeftColumnP1.innerText = `Contact us regarding any queries!`;

    fsLeftColumn.appendChild(fsLeftColumnH1);
    fsLeftColumn.appendChild(fsLeftColumnP1);
    //Left Column Complete

    const fsRightColumn = document.createElement("div");
    fsRightColumn.classList.add("right-column");
    fsRightColumn.innerHTML = `<form action="">
            <label for="contact-name">Name*</label>
            <input type="text" name="contact-name" id="contact-name" required>
            <label for="contact-email">Email*</label>
            <input type="email" name="contact-email" id="contact-email">
            <label for="contact-message">Message*</label>
            <textarea name="contact-message" id="contace-message"></textarea>
            <button type="submit">Send</button>
        </form>`;
    
    firstSection.appendChild(fsLeftColumn);
    firstSection.appendChild(fsRightColumn);

    divContent.appendChild(firstSection);
};

export {loadAboutPage};