// DATA RESOURCES
let dataResorce = [
    {
        heading: "SOLAR PANEL",
        bodyText: "This is probably the most common and obvious method, if you're looking into renewable power. Solar panels typically go on your roof, although you can also install them in your yard. Depending on your latitude and the orientation of the panels, you could generate 10 or more watts per square foot. A typical house consumes at least a kilowatt of power, so a few square feet of solar panels should be enough to power most or all of your needs.",
        imgUrl: "./img/solar-panel.jpg"
    },
    {
        heading: "HYDRO POWER",
        bodyText: "There are a number of ways to go about doing this, but at its most basic, you'll want to find the largest vertical distance the water will travel, and divert that water so it flows through a turbine in a controlled manner. Depending on the amount of water and vertical distance, you can produce a substantial amount of power this way. Setting up a hydro power generator is not easy, and you may need to have a professional install it for you. If you have some engineering knowledge, though, you could even build it yourself from scratch.",
        imgUrl: "./img/water.jpg"
    },
    {
        heading: "WIND TURBINE",
        bodyText: "Wind turbines are most commonly found in windfarms or floating offshore, but if you have enough real estate you can install a small wind turbine on your property to power your home. There are a few downsides to a wind turbine that make them less popular in residential areas. They can be ugly and make a lot of noise. They take up space, and depending on where you live, local laws and zoning regulations may outright forbid it.",
        imgUrl: "./img/windmill.jpg"
    }
];

let $btns = document.querySelectorAll('button');
let $content = document.querySelector(".content");
$content.innerHTML = `<h3 class="heading">${dataResorce[0].heading}</h3>
                              <img class="cover-img" src="${dataResorce[0].imgUrl}" alt="placeholder">
                              <p>${dataResorce[0].bodyText}</p>`;
// EVENT-OBJECT IS ACCESSED 
// AS THE FIRST PARAMETER OF THE EVENT-HANDLER 
function eventHandler(ev) {

    // fetch the clicked button
    let clickedBtn = ev.target;

    // read the text inside the button
    let btnText = clickedBtn.innerText;

    // print the text of the clicked button

    if (btnText === "PAGE 1") {
        $content.innerHTML = `<h3 class="heading">${dataResorce[0].heading}</h3>
                              <img class="cover-img" src="${dataResorce[0].imgUrl}" alt="placeholder">
                              <p>${dataResorce[0].bodyText}</p>`;
    } else if (btnText === "PAGE 2") {
        $content.innerHTML = `<h3 class="heading">${dataResorce[1].heading}</h3>
                              <img class="cover-img" src="${dataResorce[1].imgUrl}" alt="placeholder">
                              <p>${dataResorce[1].bodyText}</p>`;
    } else {
        $content.innerHTML = `<h3 class="heading">${dataResorce[2].heading}</h3>
                              <img class="cover-img" src="${dataResorce[2].imgUrl}" alt="placeholder">
                              <p>${dataResorce[2].bodyText}</p>`;
    }

}

for (let i = 0; i < $btns.length; i++) {
    $btns[i].addEventListener("click", eventHandler);
}

const links = document.querySelectorAll("button");

function handleEvent(ev) {
    for (let i = 0; i < links.length; i++) {
        if (links[i].hasAttribute("id")) {
            links[i].removeAttribute("id");
        }
    }

    let currentItem = ev.target;
    currentItem.setAttribute("id", "active-button");
}

for (let link of links) {
    link.addEventListener("click", handleEvent);
}