class SingleTextInputElementData extends ElementData {
    constructor(initValue, renderClass, inputLabel, name) {
        super(initValue, renderClass, name);
        this.inputLabel = inputLabel;
    }

    render(data) {
        const element = document.createElement("div");
        const input = document.createElement("input");
        const label = document.createElement("label");
        const deleteButton = document.createElement("button");

        element.style.display = "flex";
        element.style.justifyContent = "space-around";

        element.appendChild(label);
        element.appendChild(input);
        element.appendChild(deleteButton);

        deleteButton.textContent = "Delete";

        label.textContent = this.inputLabel;

        input.value = data.value;

        input.onchange = () => { 
            data.setData(input.value);
        }

        deleteButton.onclick = () => {
            data.removeFromElement();
        }

        return element;
    }
}