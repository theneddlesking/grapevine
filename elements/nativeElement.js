class NativeElement extends BaseElement {
    constructor(name, elementType = name, properties, styles, scripts, parent) {
        super(name, properties, styles, scripts, parent);

        this.type = elementType.toLowerCase();
    }

    render() {
        return document.createElement(this.type);
    }
}