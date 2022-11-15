class RenderedData {
    constructor(value, defaultData, element) {
        this.value = value;
        this.defaultData = defaultData;
        this.element = element;

        //init data
        this.setData(this.value);
    }

    renderOnSideMenu(renderedElement) {
        return this.defaultData.render(this, renderedElement);
    }

    setData(data) {
        this.value = data;

        this.renderData();
    }

    renderData() {
        this.defaultData.apply(this.element, this.value);
    }
}