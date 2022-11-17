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

    //STYLES

    const elementStyles = document.getElementById("styles-list");

    elementStyles.innerHTML = ""; //Sketch implementation but prolly fine

    for (let style of renderedElement.styles) {
        elementStyles.appendChild(style.renderOnSideMenu(renderedElement));
    }

    const StyleSelect = document.getElementById("style-select");
    const AddStyleButton = document.getElementById("add-style-button");

    StyleSelect.innerHTML = `<option value="">Select a style</option>`;

    const missingStyles = renderedElement.getMissingStyles(KnownStyles);

    populateSelect(missingStyles, StyleSelect);

    AddStyleButton.onclick = () => {
        const style = missingStyles[StyleSelect.selectedIndex - 1];

        if (renderedElement.hasStyle(style) || style === undefined) {
            return;
        }

        renderedElement.applyStyle(style);
        //re render with new style added
        elementStyles.appendChild(renderedElement.styles[renderedElement.styles.length - 1].renderOnSideMenu(renderedElement));
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