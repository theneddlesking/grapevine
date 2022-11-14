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
    }

}

