class RenderedStyle extends RenderedData {
    constructor(value, style, element, dataArray, names) {
        super(value, style, element, dataArray, names);
    }

    setStyle(value) {
        this.setData(value);
    }

    apply() {
        this.renderData();
    }
}