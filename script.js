

let container = document.getElementById("container")


//this function creates the grid
function makeGrid (rows,columns){
    // this loop creates the row using flexbox inside the conatiner div
    for(let i=0; i<rows; i++){
        let row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);
        // this for loop creates the squares and gives them 
        // the percet size to adapt to container
        for(let p=0; p<columns; p++){
            let square = document.createElement("div");
            square.classList.add("square");
            row.appendChild(square);
            let squareHeight = 800/rows;
            square.style.height = ""+squareHeight+"px";
            let squareWidth = 970/columns;
            square.style.width = ""+squareWidth+"px";  
            
        }   
    }  
 
}


// now i need a function that makes it so when the mouse hovers over a div
// it changes the color to black


makeGrid(100,100)