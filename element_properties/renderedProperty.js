class RenderedProperty extends RenderedData {
    constructor(value, property, element) {
        super(value, property, element);
    }

    setProp(value) {
        this.setData(value);
    }

    renderProp() {
        this.renderData();
    }
}