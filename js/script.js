const gridContainer = document.getElementById('grid-container');
const startGame = document.getElementById('start-game');
const resetGame = document.getElementById('reset-game');

let cellsCreated = false;

startGame.addEventListener ('click',
    function(){
        if (!cellsCreated) {
            for (let i = 0; i < 100; i++) {

                const newCell = createNewCell(i);
                gridContainer.append(newCell);
            }
            cellsCreated = true;
        }
    }
);

resetGame.addEventListener ('click',
    function () {
        while (gridContainer.firstChild) {
            gridContainer.removeChild(gridContainer.firstChild);
        }
        cellsCreated = false;
    }
);


function createNewCell(i) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.innerHTML = i + 1; // Add the progressive number
    cell.addEventListener('click',
        function () {
            console.log("cell " + this.innerText);

            if(this.classList.contains('clicked')){
                this.classList.remove('clicked');
            }
            else{
                this.classList.add('clicked');
            }
        }
    );
    return cell;
}

