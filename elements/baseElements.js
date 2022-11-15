class BoxElement extends BaseElement {
    constructor(name, properties, styles, scripts, parent) {
        super(name, properties, styles, scripts, parent);
    }

    render() {
        const element = document.createElement("div");
        
        return element;
    }
}

class HeadingElement extends BaseElement {
    constructor(name, properties, styles, scripts, parent) {
        super(name, properties, styles, scripts,  parent);
    }

    render() {
        const element = document.createElement("h1");

        return element;
    }
}