class TextContentProp extends ElementProperty {
    constructor(defaultText) {
        super(defaultText);
    }

    //apply new value to rendered element
    apply(element, text) {
        element.textContent = text;
    }

    //render element for the side menu
    render(prop) {
        const element = document.createElement("input");
        
        element.value = prop.value;

        element.onchange = () => { 
            prop.setProp(element.value);
        }

        return element;
    }
} 