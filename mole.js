// create variable to tell you where the mole is
let currMoleTile;
let currPlantTile;
let score = 0;
let gameOver = false;


window.onload = function() {
    setGame()
}
 function setGame() {
    // set up the grid for the game board in html
    for(let i= 0; i < 9; i++) {
        //the loop creates divs 0-8 and stops at 9,
        // title.if is giving each div an id that corresponds with its 0-8
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile);
        // append the tiles to the game board
        document.getElementById("board").appendChild(tile)
    }
    setInterval(setMole, 1000);
    setInterval(setPlant, 2000);
 }
//  function that randomizes the mole
 function getRandomTile() {
    let num = Math.floor(Math.random() * 9);
    return num.toString();
 }

 function setMole() {
    if(gameOver) {
        return
    }
    if(currMoleTile) {
        currMoleTile.innerHTML = "";
    }
    // sets the mole image
    let mole = document.createElement("img");
    mole.src = "./monty-mole.png";

    let num = getRandomTile();
    if (currPlantTile && currPlantTile.id == num){
      return;
    }
    currMoleTile = document.getElementById(num);
    currMoleTile.appendChild(mole)
 }

 function setPlant() {
    if (gameOver) {
        return;
    }
    if(currPlantTile) {
        currPlantTile.innerHTML = "";
    }
    let plant = document.createElement("img");
    plant.src = "./piranha-plant.png";

    let num = getRandomTile();
    if (currMoleTile && currMoleTile.id == num) {
        return;
    }
    currPlantTile = document.getElementById(num);
    currPlantTile.appendChild(plant)
 }

 function selectTile() {
    if (gameOver) {
        return;
    }
    if ( this == currMoleTile) {
        score += 10;
        document.getElementById("score").innerText = score.toString();

    } else if (this == currPlantTile) {
        document.getElementById("score").innerText = "GAME OVER" + score.toString();

    }
 }
