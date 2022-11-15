class ElementProperty {
    constructor(initValue) {
        this.initValue = initValue;
    }

    init(element, renderedProperties) {
        //create instance of renderedProperty
        const renderedProp = new RenderedProperty(this.initValue, this, element);

        renderedProperties.push(renderedProp);
    }
}