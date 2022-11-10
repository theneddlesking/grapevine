class Element {
    constructor() {
        //styling for the element
        this.styles = [];

        //functionality for the element
        this.scripts = [];
    }

    applyScript(script) {

    }

    applyStyle(style) {

    }

    create() {
        //get HTML and style with CSS
        const element = this.render();

        //make the element draggable so it can be positioned by the user
        draggable(element);

        //display the element
        ModuleArea.appendChild(element);
    }
}