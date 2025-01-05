//Setting up consts
const buttonInput = document.querySelector("#user-input");
const buttonPress = document.querySelector("#user-button");
const divContainer = document.querySelector("#container");


//Button logic
buttonPress.addEventListener("click", () =>{
    const squaresNumber = parseInt(buttonInput.value, 10);
    if(isNaN(squaresNumber) || squaresNumber <= 0 || squaresNumber > 100){
        alert("Please enter a number between 1 and 100.");
    }
    else{
        for (let i = 0; i <= squaresNumber; i++){
            const dynamicDiv = document.createElement("div");
            const numberOfColumns = Math.floor(Math.sqrt(squaresNumber));
            dynamicDiv.style.border = "1px solid black";
            dynamicDiv.style.flex = `0 1 ${100 / numberOfColumns}%`;
            dynamicDiv.style.height = `${100 / numberOfColumns}%`;
            dynamicDiv.style.boxSizing = "border-box";
            divContainer.appendChild(dynamicDiv);
        }
    }
    

});