const AddButton = document.getElementById("add-button");
const DeleteModeButton = document.getElementById("delete-mode-button");

let deleteMode = false;

DeleteModeButton.onclick = () => {
    deleteMode = !deleteMode;
}

AddButton.onclick = () => {
    RedSquare.create();
}