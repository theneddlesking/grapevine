class RenderedProperty {
    constructor(value, property, element) {
        this.value = value;
        this.defaultProperty = property;
        this.element = element;

        //initialise prop
        this.setProp(this.value);
    }

    renderOnSideMenu(renderedElement) {
        return this.defaultProperty.render(this, renderedElement);
    }

    setProp(value) {
        //set new value
        this.value = value;

        //re render based on a new value
        this.renderProp();
    }

    renderProp() {
        this.defaultProperty.apply(this.element, this.value);
    }
}