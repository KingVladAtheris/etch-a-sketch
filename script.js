// Setting up consts
const buttonInput = document.querySelector("#user-input");
const buttonPress = document.querySelector("#user-button");
const divContainer = document.querySelector("#container");

// Button logic
buttonPress.addEventListener("click", () => {
    const squaresNumber = parseInt(buttonInput.value, 10);
    if (isNaN(squaresNumber) || squaresNumber <= 0 || squaresNumber > 100) {
        alert("Please enter a number between 1 and 100.");
    } else {
        // Clear container before adding new divs
        divContainer.innerHTML = ''; 

        for (let i = 0; i < squaresNumber; i++) {
            const dynamicDiv = document.createElement("div");
            const numberOfColumns = Math.floor(Math.sqrt(squaresNumber));
            dynamicDiv.style.border = "1px solid black";
            dynamicDiv.style.flex = `0 1 ${100 / numberOfColumns}%`;
            dynamicDiv.style.height = `${100 / numberOfColumns}%`;
            dynamicDiv.style.boxSizing = "border-box";
            dynamicDiv.style.transition = "background-color 0.2s ease"; // smooth transition for color change

            // Initial color set to white
            dynamicDiv.style.backgroundColor = "white";

            // Store the initial state of whether it was colored
            dynamicDiv.colorChanged = false; 

            // Hover effect logic
            dynamicDiv.addEventListener("mouseenter", () => {
                // If the color has not been changed yet, set it to a random color
                if (!dynamicDiv.colorChanged) {
                    dynamicDiv.style.backgroundColor = getRandomRGB();
                    dynamicDiv.colorChanged = true; // Mark that the color has been changed
                } else {
                    // Darken the color if it has been changed before
                    dynamicDiv.style.backgroundColor = darkenColor(dynamicDiv.style.backgroundColor, 0.1);
                }
            });

            divContainer.appendChild(dynamicDiv);
        }
    }
});

// Function to generate a random RGB color
function getRandomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

// Function to darken a color by a specified percentage
function darkenColor(color, percent) {
    const rgb = color.match(/\d+/g); // Extract rgb values
    let r = parseInt(rgb[0]);
    let g = parseInt(rgb[1]);
    let b = parseInt(rgb[2]);

    r = Math.floor(r - r * percent);
    g = Math.floor(g - g * percent);
    b = Math.floor(b - b * percent);

    return `rgb(${r}, ${g}, ${b})`;
}
