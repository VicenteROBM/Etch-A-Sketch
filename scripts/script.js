"use strict";

function removeGrid() {
    const elements = document.getElementsByClassName("row");
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}

//this function creates the grid
function makeGrid(rows,columns){
    let container = document.getElementById("container");
    removeGrid(container)

    // this loop creates the row using flexbox inside the conatiner div
    for(let i=0; i<rows; i++){

        let row = document.createElement("div");
        row.classList.add("row");
        row.setAttribute("id","grid");
        container.appendChild(row);
        // this for loop creates the squares and gives them
        // the percet size to adapt to container
        for(let p=0; p<columns; p++){
            let square = document.createElement("div");
            square.classList.add("square");
            square.classList.add("white");
            row.appendChild(square);
            let squareHeight = 800/rows;
            square.style.height = ""+squareHeight+"px";
            let squareWidth = 1000/columns;
            square.style.width = ""+squareWidth+"px";

            square.addEventListener("mouseover",function(){
                square.classList.add("black")
            })
        }
    }
}

function validateForm() {
    let input = document.querySelector("input");
    let value = input.value;
    let invalid = false;
    if (!value) {
        input.setCustomValidity("Invalid");
        alert("You must enter a value greater than 0");
        invalid = true;
    } else if (!value.match(/^\d+$/)) {
        input.setCustomValidity("Invalid");
        alert("Value must be numeric");
        invalid = true;
    } else if (value < 1 || value > 100) {
        input.setCustomValidity("Invalid");
        alert("Value must be between 1 and 100, both inclusive");
        invalid = true;
    }

    if (!invalid) {
        input.setCustomValidity("");
        makeGrid(value, value);
    }
    return false;
}



// now i need a function that makes it so when the mouse hovers over a div
// it changes the color to black

