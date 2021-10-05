
let container = document.querySelector('.container'); 

function createGrid(gridSize){
    for(i=0; i < gridSize ** 2; i++){
    const divs = document.createElement("div"); 
    divs.classList.add("default")
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`
    container.appendChild(divs);
    }
}
createGrid(10);