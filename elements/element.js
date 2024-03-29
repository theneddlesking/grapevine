//this is specifically the template of the element that generates the elements that display
//NOT THE ELEMENT THAT IS DISPLAYED
class Element {
    constructor(name = "Unnamed Element", properties = [], styles = [], scripts = [], parent = MyClient.currentApp) {
        this.name = name;

        //styling for the element
        this.styles = styles;

        //functionality for the element
        this.scripts = scripts;

        //inherient values unique to this element
        this.properties = properties;

        //parent element
        this.parent = parent;

        //child elements (they are the literal children in DOM also)
        this.children = [];
    }

    create() {
        //create element HTML
        const element = this.render();

        //element obj after being rendered
        const renderedElement = new RenderedElement(this.name, this.properties, this.styles, this.scripts, element, this.parent);
        
        this.parent.addChild(renderedElement);
    }

    removeChild(element) {
        for (let index in this.children) {
            const child = this.children[index];
            if (child === element) {

                //TODO: child should also remove all of its children (maybe not necessary but almost certainly is)

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