let container = document.querySelector('.container'); 


function createGrid(gridSize){
    container.innerHTML = '';
    for(i=0; i < gridSize ** 2; i++){
    const divs = document.createElement("div"); 
    divs.classList.add("default")
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`
    container.appendChild(divs);
    }
}



function changeGrid(){
    const sizeButtons = document.querySelectorAll(".canvas_button")
    sizeButtons.forEach((button) => {
        button.addEventListener("click", (e) => {
            const gridID = e.currentTarget.id; 
            if(gridID == "ten"){
                createGrid(10);
            } else if(gridID == "thirty"){
                createGrid(30); 
            }else if (gridID == "fifty"){
                createGrid(50);
            }
        });
    });
};


/*
function generateColor(colorArr){
    const dark = ["#733c04", "#170c00", "#021627", "#4f5b66"]; 
    const rainbow = ["#ff0000", "#f0ff00", "#0fff00", "#0046ce", "#9900c9"]; 
    const warm = ["#bf9000", "#744700", "#ffe599", "#b6d7a8", "#f6b26b"];
    const pastel = ["#ffbde8", "#bde8ff", "#e8ffbd", "#ffe8bd", "#e8bdff"]
    const gridDiv = document.querySelectorAll(".container > div");
    gridDiv.forEach((item) => {
        const randomColor = colorArr(Math.floor(Math.random() * colorArr.length);
    });
    item.addEventListener("mouseover", (e) => {
        e.target.style.background = randomColor; 
    });
    
}
*/

function chooseColor(){
    const colorButtons = document.querySelectorAll(".color_button");
    colorButtons.forEach((button) => {
        button.addEventListener("click", (e) => {
            const currentColor = e.currentTarget.id;
            button.style.boxShadow = "5px 5px 5px white" // change to a const class and toggle 
            console.log(currentColor); // Change to call generate color 
        });
     });
};




chooseColor(); // Working Function
createGrid(10); // working function
changeGrid(); // working function