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

/*
3 Levels of properties
----------------------
1. The actual property definition (TextContentProp lets you alter the TextContent of an element)
2. The assignment of properties to unrendered elements
3. The application of properties on rendered elements
*/
