class SizeStyle extends ElementStyle {
    constructor(width, height) {
        super({width, height}, "Size");
    }

    apply(element, size) {
        element.style.width = size.width + "px";
        element.style.height = size.height + "px";
    }

    setElementToDefault(element, elementDefault) {
        element.style.width = elementDefault.width;
        element.style.height = elementDefault.height;
    }

    getElementDefault(element) {
        return {
            width : "",
            height : "",
        }
    }

    render(style) {
        const element = document.createElement("div");
        const input1 = document.createElement("input");
        const label1 = document.createElement("label");
        const input2 = document.createElement("input");
        const label2 = document.createElement("label");

        const deleteButton = document.createElement("button");

        const div1 = document.createElement("div");
        const div2 = document.createElement("div");

        div1.style.display = "flex";
        div1.style.justifyContent = "space-around";
        div2.style.display = "flex";
        div2.style.justifyContent = "space-around";

        element.appendChild(div2);
        element.appendChild(div1);
        element.appendChild(deleteButton);

        div2.appendChild(label2);
        div2.appendChild(input2);
        div1.appendChild(label1);
        div1.appendChild(input1);

        label1.textContent = "Width";
        label2.textContent = "Height";

        input1.value = style.value.width;
        input2.value = style.value.width;

        deleteButton.textContent = "Delete";

        input1.onchange = () => { 
            style.setStyle({ width : input1.value, height : input2.value});
        }

        input2.onchange = () => { 
            style.setStyle({ width : input1.value, height : input2.value});
        }

        deleteButton.onclick = () => {
            style.removeFromElement();
        }

        return element;
    }
}