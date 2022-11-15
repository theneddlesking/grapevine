const DeleteElementButton = document.getElementById("delete-element-button");

const makeSideMenuVisible = (visibility = true) => {
    if (visibility) {
        SideMenu.classList.remove("hide");
    } else {
        SideMenu.classList.add("hide");
    }
}

const openSideMenu = (renderedElement) => {
    makeSideMenuVisible();

    DeleteElementButton.onclick = () => {
        renderedElement.delete();

        //hide menu so that you can't access the deleted element
        makeSideMenuVisible(false);

        //remove onclick functionality to remove reference to the renderedElement
        DeleteElementButton.onclick = null;
    }


    const elementProps = document.getElementById("props-list");

    elementProps.innerHTML = ""; //Sketch implementation but prolly fine

    for (let prop of renderedElement.properties) {
        elementProps.appendChild(prop.renderOnSideMenu(renderedElement));
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