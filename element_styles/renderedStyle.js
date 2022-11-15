class RenderedStyle extends RenderedData {
    constructor(value, style, element) {
        super(value, style, element);
    }

    setStyle(value) {
        this.setData(value);
    }

    apply() {
        this.renderData();
    }
}