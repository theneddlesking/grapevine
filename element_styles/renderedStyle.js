class RenderedStyle {
    constructor(value, style, element) {
        this.value = value;
        this.defaultStyle = style;
        this.element = element;

        //initialise style
        this.setStyle(this.value);
    }

    renderOnSideMenu(renderedElement) {
        return this.defaultStyle.render(this, renderedElement);
    }

    setStyle(value) {
        //set new value
        this.value = value;

        //apply the new style
        this.apply();
    }

    apply() {
        this.defaultStyle.apply(this.element, this.value);
    }
}