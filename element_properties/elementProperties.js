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
        const element = document.createElement("div");
        const input = document.createElement("input");
        const label = document.createElement("label");

        element.style.display = "flex";
        element.style.justifyContent = "space-around";

        element.appendChild(label);
        element.appendChild(input);

        label.textContent = "Text";

        input.value = prop.value;

        input.onchange = () => { 
            prop.setProp(input.value);
        }

        return element;
    }
} 