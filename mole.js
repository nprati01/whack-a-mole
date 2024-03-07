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
        document.getElementById("board").appendChild(tile)
    }
 }
