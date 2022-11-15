class BoxElement extends BaseElement {
    constructor(name, styles, scripts, parent) {
        super(name, styles, scripts, parent);
    }

    render() {
        const element = document.createElement("div");
        
        return element;
    }
}

class HeadingElement extends BaseElement {
    constructor(name, styles, scripts, parent) {
        super(name, styles, scripts, parent);

        this.properties = [new TextContentProp("Heading")];
    }

    render() {
        const element = document.createElement("h1");

        return element;
    }
}