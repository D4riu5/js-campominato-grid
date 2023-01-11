const gridContainer = document.getElementById('grid-container');


function createNewCell() {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.addEventListener('click',
        function () {
            console.log(this);
            console.log(this.classList);

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

for (let i = 0; i < 100; i++) {

    const newCell = createNewCell();
    gridContainer.append(newCell);

}