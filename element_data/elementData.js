class ElementData {
    constructor(initValue, renderClass) {
        this.initValue = initValue;
        this.renderClass = renderClass;
    }

    init(element, renderedDataArray) {
        const renderedData = new this.renderClass(this.initValue, this, element);

        renderedDataArray.push(renderedData);
    }

    setElementToDefault(element, defaultData) {
        throw new Error("No method exists to set element to default data. Custom styles, properties or scripts must have a setElementToDefault method and should use a custom getElementDefault method as well.");
    }

    getElementDefault(element, defaultData) {
        console.warn("Element data does not have a render default to get (using empty string as default). (This may cause consistency issues when editing / sharing elements)");
        
        //default element data (works for native styles)
        return "";
    }
}