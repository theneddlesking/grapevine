class DefaultElement extends Element {
    constructor(color) {
        super();
        this.color = color;
    }

    render() {
        const element = document.createElement("div");
        
        element.style.backgroundColor = this.color;
        element.style.width = "100px";
        element.style.height = "100px";

        return element;
    }
}

const RedSquare = new DefaultElement("red");
