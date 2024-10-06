// Select necessary elements
let familylis = document.querySelector(".families");

let exop1 = document.querySelector(".exopdiv1");
let exop2 = document.querySelector(".exopdiv2");
let exop3 = document.querySelector(".exopdiv3");

let expo1name = document.querySelector("#exop1");
let expo2name = document.querySelector("#exop2");
let expo3name = document.querySelector("#exop3");

let familypresentationdiv = document.querySelector(".family-presentation");

let familylist = document.querySelectorAll(".family");

let describtion = `TOI-1338 c is a gas giant exoplanet that orbits an F-type star. Its mass is 0.205 Jupiters, it takes 215.5 days to complete one orbit of its star, and is 0.794 AU from its star. Its discovery was announced in 2023.
            <br>
            TOI-1338 c's presence was confirmed by observing the gravitational influence it exerts on its stellar hosts.`;

let maininfo = `Planet Radius:
                0.205 Jupiters
                <br>
                Discovery Method:
                Transit
                <br>
                Planet Mass:
                0.205 Jupiters
                <p class="column2">
                Orbital Radius:
                0.794 AU
                <br>
                Orbital Period:
                215.8 days`;

// Updated info structure
let exopinfo = (planetName, description, mainInfo) => `
    <div class="info">
        <div class="information">
            <div class="bold1">${planetName}:</div>
            <div class="text1">
            <br>
            ${description}
            </div>
        </div>
        <div class="main-info">
            <span class="bold">Main information:</span>
            <div class="text2">
                <p class="column1">
                ${mainInfo}
                </p>
            </div>
        </div>
    </div>`;

// Add CSS directly
let styles = `
    .info {
        position: absolute;
        top: 100px;
        display: flex;
        flex-direction: column;
        margin-left: 50px;
        width: 70%;
    }
    .info .information {
        display: flex;
        flex-direction: column;
    }
    .info .text1 {
        display: flex;
        flex-direction: row;
        font-family: 'outfit', sans-serif;
        font-weight: 200;
        font-size: 22px;
        margin-bottom: 40px;
    }
    .info .bold {
        font-size: 25px;
        font-family: 'Formation Sans Regular', sans-serif;
        font-weight: 500;
    }
    .info .bold1 {
        font-size: 25px;
        font-family: 'Formation Sans Regular', sans-serif;
        font-weight: 500;
    }
    .info p {
        font-size: 22px;
        font-weight: 200;
        margin-right: 20px;
    }
    .info .main-info .text2 {
        display: flex;
        flex-direction: row;
    }
`;

let styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

// Set planet content
let planetscontent = {
    planet1: [
        `CoRoT-31 b is a gas giant exoplanet that orbits a G-type star.<br> Its discovery was announced in 2020.`,
        `Planet Radius: 1.46 x Jupiter
         <br>Discovery Method: Transit
         <br>Planet Mass: 0.84 Jupiters
         <p class="column2">
         Orbital Radius: 0.0586 AU
         <br>Orbital Period: 4.6 days`
    ],
    planet2: [
        `TOI-1338 c is a gas giant exoplanet that orbits an F-type star.<br> Its discovery was announced in 2023.`,
        `Planet Radius: 0.205 Jupiters
         <br>Discovery Method: Transit
         <br>Planet Mass: 0.205 Jupiters
         <p class="column2">
         Orbital Radius: 0.794 AU
         <br>Orbital Period: 215.8 days`
    ],
    planet3: [
        `HD 98736 b is a gas giant exoplanet that orbits a K-type star.<br> Its discovery was announced in 2018.`,
        `Planet Radius: 1.19 Jupiters
         <br>Discovery Method: Radial Velocity
         <br>Planet Mass: 2.33 Jupiters
         <p class="column2">
         Orbital Radius: 0.134 AU
         <br>Orbital Period: 14.3 days`
    ],
};

// Keep track of initial positions
let exoparray = [exop1, exop2, exop3];
let toggle = false;
let selectedElement = null;

let initialPositions = exoparray.map((element) => {
    let rect = element.getBoundingClientRect();
    return { left: rect.left, top: rect.top };
});

// Event listeners for each exoplanet
exoparray.forEach((element, index) => {
    element.addEventListener("click", function () {
        if (!toggle) {
            // Hide other exoplanets
            exoparray.forEach((el) => {
                el.style.transition = "opacity 0.3s ease-in-out";
                el.style.opacity = 0;
            });

            // Hide family list and presentation
            familylis.style.display = "none";
            familypresentationdiv.style.display = "none";

            // Show the clicked exoplanet and transform
            element.style.transition =
                "opacity 0.3s ease-in-out, transform 1s ease-in-out";
            element.style.opacity = 1;
            element.style.display = "block";
            element.style.position = "absolute";

            let planetName = `Planet ${index + 1}`;
            let planetDescription = planetscontent[`planet${index + 1}`][0];
            let planetMainInfo = planetscontent[`planet${index + 1}`][1];

            // Apply transformations
            let transformMap = ["translate(25vw, -6vw)", "translate(50vw, -2vw)", "translate(2vw, -1vw)"];
            element.style.transform = transformMap[index];

            // Update and append new div for planet info
            let newDiv = document.createElement("div");
            newDiv.innerHTML = exopinfo(planetName, planetDescription, planetMainInfo);
            newDiv.classList.add("info");

            if (!document.body.contains(newDiv)) {
                document.body.appendChild(newDiv);
            }
        } else {
            // Fade back in other exoplanets
            exoparray.forEach((el, i) => {
                el.style.transition =
                    "opacity 0.3s ease-in-out, left 1s ease, top 1s ease, transform 1s ease";
                el.style.opacity = 1;
                el.style.transform = "none";
                el.style.left = `${initialPositions[i].left}px`;
                el.style.top = `${initialPositions[i].top}px`;
            });

            // Remove planet info div
            let infoDiv = document.querySelector(".info");
            if (document.body.contains(infoDiv)) {
                document.body.removeChild(infoDiv);
            }

            // Show family list and presentation again
            familylis.style.display = "flex";
            familypresentationdiv.style.display = "flex";
        }

        // Toggle state
        toggle = !toggle;
        selectedElement = element;
    });
});

// Function to change background images and names
function changeBackgrounds(images) {
    exop1.style.backgroundImage = `url('${images[0]}')`;
    exop2.style.backgroundImage = `url('${images[1]}')`;
    exop3.style.backgroundImage = `url('${images[2]}')`;

    [exop1, exop2, exop3].forEach((el) => {
        el.style.width = "320px";
        el.style.height = "320px";
        el.style.backgroundSize = "cover";
        el.style.backgroundPosition = "center";
    });
}

function changeNames(name1, name2, name3) {
    expo1name.innerHTML = name1;
    expo2name.innerHTML = name2;
    expo3name.innerHTML = name3;
}

// Initialize family selection on page load
document.addEventListener("DOMContentLoaded", function () {
    // Set initial backgrounds and names for family1
    changeBackgrounds([
        "planets/family1/1.png",
        "planets/family1/2.png",
        "planets/family1/3.png",
    ]);
    changeNames("Corot-31 b", "TOI-1338 c", "HD 98736 b");
});

// Family selection handling
let familyImages = {
    family1: [
        "planets/family1/1.png",
        "planets/family1/2.png",
        "planets/family1/3.png",
    ],
    family2: [
        "planets/family2/1.png",
        "planets/family2/2.png",
        "planets/family2/3.png",
    ],
    family3: [
        "planets/family3/1.png",
        "planets/family3/2.png",
        "planets/family3/3.png",
    ],
};

let planetnames = {
    family1: ["Corot-31 b", "TOI-1338 c", "HD 98736 b"],
    family2: ["Kepler-37 b", "TOI 700 E", "Kepler-444 b"],
    family3: ["Kepler-666 b", "K2-188 c", "Kepler-441 e"],
};

// Add click event listeners for family selection
familylist.forEach((element, index) => {
    element.addEventListener("click", function () {
        familylist.forEach((el) => el.classList.remove("family-active"));
        element.classList.add("family-active");

        let family = `family${index + 1}`;
        changeBackgrounds(familyImages[family]);
        changeNames(
            planetnames[family][0],
            planetnames[family][1],
            planetnames[family][2]
        );
    });
});
