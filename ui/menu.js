const ElementSelect = document.getElementById("element-select");
const AddButton = document.getElementById("add-button");
const SideMenu = document.getElementById("side-menu");

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

AddButton.onclick = () => {
    if (ElementSelect.selectedIndex == 0) {
        return; //no element is selected
    }

    const element = KnownElements[ElementSelect.selectedIndex - 1];

    element.create();

    // ElementSelect.selectedIndex = 0;
}