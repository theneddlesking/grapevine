class RenderedProperty extends RenderedData {
    constructor(value, property, element, dataArray, names) {
        super(value, property, element, dataArray, names);
    }

    setProp(value) {
        this.setData(value);
    }

    renderProp() {
        this.renderData();
    }
}