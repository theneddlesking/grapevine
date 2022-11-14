// Make the DIV element draggable:
const draggable = (elmnt, elmntObj) => {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    let initPos1, initPos2, initPos3, initPos4

   
    elmnt.style.position = "absolute";
    
    const dragMouseDown = (e) => {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;

        initPos1 = pos1;
        initPos2 = pos2;
        initPos3 = pos3;
        initPos4 = pos4;


        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    const elementDrag = (e) => {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    const clickedNotDragged = () => {
        return (pos1 === initPos1 && pos2 === initPos2 && pos3 === initPos3 && pos4 === initPos4);
    }

    const closeDragElement = () => {

        if (clickedNotDragged()) {
            elmntObj.onclick();
        }

        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }

    elmnt.onmousedown = dragMouseDown;
}
