class Module {
    constructor() {
        //global app data
        this.data = {
            
        };

        //presentation and manipulation of app data
        this.elements = [];
    }

    addElement(element) {
        this.elements.push(element);
        console.log(this.elements);
    }
}