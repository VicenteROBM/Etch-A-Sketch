

/* function takes row and columns

for loop that makes columns (add display flex on the colums)
and another loop that add "columns" value ass grid squares

rows must == columns
maximum 100 x 100
*/


const container = document.getElementById("container")

function makeGrid (row,column){

// for loop creates rows
for( let i = 0; i< row; i++){
    let row = document.createElement("div")
    row.classList.add("row")
    container.appendChild(row)
    for(let p=0; p<column; p++){
        let gridSquare = document.createElement("div")
        gridSquare.classList.add("gridSquare")
        row.appendChild(gridSquare)
    }

}


    // for loop add squareGrids to each row
    gridSquare


}
makeGrid(16,16)
