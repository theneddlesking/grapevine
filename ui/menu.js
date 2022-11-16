const ElementSelect = document.getElementById("element-select");
const AddButton = document.getElementById("add-button");
const SideMenu = document.getElementById("side-menu");

const populateSelect = (array, selectElement, textProp = "name") => {
    const createOption = (element) => {
        const option = document.createElement("option");
        option.textContent = element[textProp];
        option.value = element[textProp];

        selectElement.appendChild(option);
    }

    array.forEach(item => createOption(item));
}

const populateElementSelect = () => {
    populateSelect(KnownElements, ElementSelect); 
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