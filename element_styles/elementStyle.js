class ElementStyle {
    constructor(initValue) {
        this.initValue = initValue;
    }

    init(element, renderedStyles) {
        //create instance of renderedStyle
        const renderedStyle = new RenderedStyle(this.initValue, this, element);

        renderedStyles.push(renderedStyle);
    }
}