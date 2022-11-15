class SingleTextInputElementData extends ElementData {
    constructor(initValue, renderClass, inputLabel) {
        super(initValue, renderClass);
        this.inputLabel = inputLabel;
    }

    render(data) {
        const element = document.createElement("div");
        const input = document.createElement("input");
        const label = document.createElement("label");

        element.style.display = "flex";
        element.style.justifyContent = "space-around";

        element.appendChild(label);
        element.appendChild(input);

        label.textContent = this.inputLabel;

        input.value = data.value;

        input.onchange = () => { 
            data.setData(input.value);
        }

        return element;
    }
}