const ElementSelect = document.getElementById("element-select");
const AddButton = document.getElementById("add-button");
const DeleteModeButton = document.getElementById("delete-mode-button");
const SideMenu = document.getElementById("side-menu");

let deleteMode = false;

const populateElementSelect = () => {
    const createElementOption = (element) => {
        const option = document.createElement("option");
        option.textContent = element.name;
        option.value = element.name;

        ElementSelect.appendChild(option);
    }

    KnownElements.forEach(element => createElementOption(element));
}

populateElementSelect();

DeleteModeButton.onclick = () => {
    deleteMode = !deleteMode;
}

AddButton.onclick = () => {
    if (ElementSelect.selectedIndex == 0) {
        return; //no element is selected
    }

    const element = KnownElements[ElementSelect.selectedIndex - 1];

    element.create();

    // ElementSelect.selectedIndex = 0;
}