let container = document.querySelector('.container'); 

function removeStyle(buttons) {
    buttons.forEach((button) => {
      button.classList.remove('active');
    });
  }
  
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
    const sizeButtons = document.querySelectorAll(".canvas_button");
    const colorButtons = document.querySelectorAll(".color_button");
    sizeButtons.forEach((button) => {
        button.addEventListener("click", (e) => {
            removeStyle(sizeButtons);
            removeStyle(colorButtons);
            const gridID = e.currentTarget.id; 
            if(gridID == "ten"){
                createGrid(10);
                sizeButtons[0].classList.add("active");
            } else if(gridID == "thirty"){
                createGrid(30); 
                sizeButtons[1].classList.add("active");
            }else if (gridID == "fifty"){
                createGrid(50);
                sizeButtons[2].classList.add("active");
            }
        });
    });
};



function generateColor(colorMode, colorArr){
    const gridDiv = document.querySelectorAll(".container > div");
    gridDiv.forEach((item) => {
        if(colorMode === "dark" || colorMode === "rainbow" || colorMode === "warm" || colorMode === "pastel"){
        const randomColor = colorArr[Math.floor(Math.random() * colorArr.length)];
        item.addEventListener("mouseenter", (e) => {
            e.target.style.background = randomColor; 
        });
        }
    });   
}


function chooseColor(){
    const colorButtons = document.querySelectorAll(".color_button");
    colorButtons.forEach((button) => {
        button.addEventListener("click", (e) => {
            removeStyle(colorButtons);
            const colorMode = e.currentTarget.id; 
            if( colorMode === "dark") {
                colorButtons[0].classList.add("active")
                generateColor("dark", ["#733c04", "#170c00", "#021627", "#4f5b66"]);
            }else if(colorMode === "rainbow"){
                colorButtons[1].classList.add("active")
                generateColor("rainbow",["#ff0000", "#f0ff00", "#0fff00", "#0046ce", "#9900c9"]);
            } else if (colorMode === "warm"){
                colorButtons[2].classList.add("active")
                generateColor("warm", ["#a16c01", "#99183c", "#704044", "#5b0b2c", "#5b0b2c"]);
            } else if (colorMode === "pastel"){
                colorButtons[3].classList.add("active")
                generateColor("pastel",["#ffaae9", "#bcffff", "#ffeea9", "#a6ffbd", "#dffd80"]);
            }
        });
     });
};


// generateColor() is also working function 
chooseColor(); // Working Function
createGrid(50); // working function
changeGrid(); // working function
