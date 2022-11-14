//this is specifically the template of the element that generates the elements that display
//NOT THE ELEMENT THAT IS DISPLAYED
class Element {
    constructor(name = "Unnamed Element", styles = [], scripts = [], parent = MyClient.currentApp) {
        this.name = name;

        //styling for the element
        this.styles = styles;

        //functionality for the element
        this.scripts = scripts;

        //parent element
        this.parent = parent;

        //child elements
        this.children = [];
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

        //element obj after being rendered
        const renderedElement = new RenderedElement(this.name, this.styles, this.scripts, element, this.parent);

        //make the element draggable so it can be positioned by the user
        draggable(element, renderedElement);

        this.parent.addChild(renderedElement);

        //give current app scope over the element
        // MyClient.currentApp.addElement(renderedElement);
    }

    removeChild(element) {
        for (let index in this.children) {
            const child = this.children[index];
            if (child === element) {
                this.children.splice(index, 1);
                this.render.removeChild(element.render);
                return;
            }
        }

        throw new Error("Tried to remove child element that does not exist.");
    }

    addChild(element) {
        this.render.appendChild(element.render);
        this.children.push(element);
    }
}