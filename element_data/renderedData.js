class RenderedData {
    constructor(value, defaultData, element) {
        this.value = value;
        this.defaultData = defaultData;
        this.element = element;

        //get current element default (so if style / prop is removed the element default can be reset)
        this.elementDefault = this.getElementDefault(element, value, defaultData);

        //set new element default
        this.setData(this.value);
    }

    //required so that styles & properties can be consistently unapplied
    setElementToDefault(element, defaultData) {
        this.defaultData.setElementToDefault(element, defaultData);
    }

    //required so that styles & properties can be consistently unapplie
    getElementDefault(element, defaultData) {
        return this.defaultData.getElementDefault(element, defaultData);
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