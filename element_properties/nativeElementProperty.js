class NativeProperty extends SingleTextInputElementData {
    constructor(inputLabel, value) {
        super(value, RenderedProperty, inputLabel, inputLabel);
    }

    setElementToDefault(element) {
        element[this.getPropertyString()] = this.elementDefault;
    }

    getElementDefault(element) {
        return "";
    }

    getPropertyString() {
        const words = this.inputLabel.toLowerCase().split(" ");

        let str = "";
        for (let index in words) {
            const word = index == 0 ? words[index] : words[index][0].toUpperCase() + words[index].substring(1);
            str += word;
        }

        return str;
    }   

    apply(element, value) {
        element[this.getPropertyString()] = value;
    }
}