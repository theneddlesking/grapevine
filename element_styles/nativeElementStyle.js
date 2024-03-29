class NativeStyle extends SingleTextInputElementData {
    constructor(inputLabel, value = "") {
        super(value, RenderedStyle, inputLabel, inputLabel);
    }

    setElementToDefault(element, elementDefault) {
        element.style[this.getStyleString()] = elementDefault;
    }

    getElementDefault(element) {
        return "";
    }

    getStyleString() {
        const words = this.inputLabel.toLowerCase().split(" ");

        let str = "";
        for (let index in words) {
            const word = index == 0 ? words[index] : words[index][0].toUpperCase() + words[index].substring(1);
            str += word;
        }

        return str;
    }   

    apply(element, value) {
        element.style[this.getStyleString()] = value;
    }
}

