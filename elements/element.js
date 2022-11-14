//this is specifically the template of the element that generates the elements that display
//NOT THE ELEMENT THAT IS DISPLAYED
class Element {
    constructor(name = "Unnamed Element", styles = [], scripts = [], parent = ModuleArea) {
        this.name = name;

        //styling for the element
        this.styles = styles;

        //functionality for the element
        this.scripts = scripts;

        //parent element
        this.parent = parent;
    }

    applyStyles(element) {
        this.styles.forEach(style => style.apply(element));
    }

    applyScripts(element) {
        this.scripts.forEach(script => script.apply(element));
    }

    create() {
        //create element HTML
        const element = this.render();

        //apply CSS styling to the element
        this.applyStyles(element);

        //display the element
        this.parent.appendChild(element);

        const renderedElement = new RenderedElement(this.name, this.styles, this.scripts, element);

        //make the element draggable so it can be positioned by the user
        draggable(element, renderedElement);

        //give current module scope over the element
        MyClient.currentApp.addElement(renderedElement);
    }
}