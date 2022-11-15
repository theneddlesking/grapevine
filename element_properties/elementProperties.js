class TextContentProp extends SingleTextInputElementData {
    constructor(defaultText) {
        super(defaultText, RenderedProperty, "Text Content");
    }

    //apply new value to rendered element
    apply(element, text) {
        element.textContent = text;
    }
} 