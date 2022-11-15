class ElementData {
    constructor(initValue, renderClass) {
        this.initValue = initValue;
        this.renderClass = renderClass;
    }

    init(element, renderedDataArray) {
        const renderedData = new this.renderClass(this.initValue, this, element);

        renderedDataArray.push(renderedData);
    }
}