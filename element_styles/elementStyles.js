class SizeStyle extends ElementStyle {
    constructor(width, height) {
        super({width, height});
    }

    apply(element, size) {
        element.style.width = size.width + "px";
        element.style.height = size.height + "px";
    }

    render(style) {
        const element = document.createElement("div");
        const input1 = document.createElement("input");
        const label1 = document.createElement("label");
        const input2 = document.createElement("input");
        const label2 = document.createElement("label");

        const div1 = document.createElement("div");
        const div2 = document.createElement("div");

        div1.style.display = "flex";
        div1.style.justifyContent = "space-around";
        div2.style.display = "flex";
        div2.style.justifyContent = "space-around";

        element.appendChild(div2);
        element.appendChild(div1);

        div2.appendChild(label2);
        div2.appendChild(input2);
        div1.appendChild(label1);
        div1.appendChild(input1);

        label1.textContent = "Width";
        label2.textContent = "Height";

        input1.value = style.value.width;
        input2.value = style.value.width;

        input1.onchange = () => { 
            style.setStyle({ width : input1.value, height : input2.value});
        }

        input2.onchange = () => { 
            style.setStyle({ width : input1.value, height : input2.value});
        }

        return element;
    }
}

class BackgroundColorStyle extends ElementStyle {
    constructor(color) {
        super(color);
    }

    apply(element, color) {
        element.style.backgroundColor = color;
    }

    render(style) {
        const element = document.createElement("div");
        const input = document.createElement("input");
        const label = document.createElement("label");

        element.style.display = "flex";
        element.style.justifyContent = "space-around";

        element.appendChild(label);
        element.appendChild(input);

        label.textContent = "Color";

        input.value = style.value;

        input.onchange = () => { 
            style.setStyle(input.value);
        }

        return element;
    }
}

class ColorStyle extends ElementStyle {
    constructor(color) {
        super(color);
    }

    apply(element, color) {
        element.style.color = color;
    }

    render(style) {
        const element = document.createElement("div");
        const input = document.createElement("input");
        const label = document.createElement("label");

        element.style.display = "flex";
        element.style.justifyContent = "space-around";

        element.appendChild(label);
        element.appendChild(input);

        label.textContent = "Color";

        input.value = style.value;

        input.onchange = () => { 
            style.setStyle(input.value);
        }

        return element;
    }
}