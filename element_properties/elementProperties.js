class TextContentProp extends ElementProperty {
    constructor(defaultText) {
        super();

        this.text = defaultText;

        this.element = undefined;
    }

    setProp(text) {
        this.text = text;

        this.apply(this.element);
    }

    apply(element) {
        this.element = element;

        element.textContent = this.text;
    }

    //render element for the side menu
    render() {
        const element = document.createElement("input");
        
        element.value = this.text;

        const self = this;
        element.onchange = () => { 
            self.setProp(element.value);
        }

        return element;
    }
} 