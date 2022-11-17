const DeleteElementButton = document.getElementById("delete-element-button");

const makeSideMenuVisible = (visibility = true) => {
    if (visibility) {
        SideMenu.classList.remove("hide");
    } else {
        SideMenu.classList.add("hide");
    }
}

let currentSideMenuElement = undefined;

const openSideMenu = (renderedElement = currentSideMenuElement) => {

    currentSideMenuElement = renderedElement;

    makeSideMenuVisible();

    DeleteElementButton.onclick = () => {
        renderedElement.delete();

        //hide menu so that you can't access the deleted element
        makeSideMenuVisible(false);

        //remove onclick functionality to remove reference to the renderedElement
        DeleteElementButton.onclick = null;
    }

    //PROPERTIES

    const elementProps = document.getElementById("props-list");

    elementProps.innerHTML = ""; //Sketch implementation but prolly fine

    for (let prop of renderedElement.properties) {
        elementProps.appendChild(prop.renderOnSideMenu(renderedElement));
    }

    addElementData(renderedElement, KnownProperties, "property", elementProps);

    //STYLES

    const elementStyles = document.getElementById("styles-list");

    elementStyles.innerHTML = ""; //Sketch implementation but prolly fine

    for (let style of renderedElement.styles) {
        elementStyles.appendChild(style.renderOnSideMenu(renderedElement));
    }

    addElementData(renderedElement, KnownStyles, "style", elementStyles);
}

const addElementData = (renderedElement, known, type, dataListElement) => {
    const DataSelect = document.getElementById(`${type}-select`);
    const AddDataButton = document.getElementById(`add-${type}-button`);

    DataSelect.innerHTML = `<option value="">Select a ${type}</option>`;

    const missingData = renderedElement.getMissingData(known, type);

    populateSelect(missingData, DataSelect);

    AddDataButton.onclick = () => {
        //first option is a helper option that should not be selected
        if (DataSelect.selectedIndex == 0) {
            return;
        }


        const data = missingData[DataSelect.selectedIndex - 1];

        if (renderedElement.hasData(data, type) || data === undefined) {
            return;
        }

        renderedElement.applyData(data, type);

        const dataArray = renderedElement.getDataArray(type);

        //re render with new style added
        dataListElement.appendChild(dataArray[dataArray.length - 1].renderOnSideMenu(renderedElement));
    }
}

const setSideMenuContent = (contentName) => {

    //show correct content area
    const contentNames = ["props", "styles", "scripts"];
    for (let cName of contentNames) {
        if (cName === contentName) {
            document.getElementById(`element-${cName}`).classList.remove("hide");
        } else {
            document.getElementById(`element-${cName}`).classList.add("hide");
        }
    }
}