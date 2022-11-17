class RenderedData {
    constructor(value, defaultData, element, dataArray, dataArrayNames) {
        this.value = value;
        this.defaultData = defaultData;
        this.element = element;

        //array for which this data is contained (ie. styles, scripts, properties)
        this.dataArray = dataArray;

        //names of data contained 
        this.dataArrayNames = dataArrayNames;

        //get current element default (so if style / prop is removed the element default can be reset)
        this.elementDefault = this.getElementDefault();

        //set new element default
        this.setData(this.value);
    }

    //required so that styles & properties can be consistently unapplied
    setElementToDefault() {
        this.defaultData.setElementToDefault(this.element, this.elementDefault);
    }

    //required so that styles & properties can be consistently unapplie
    getElementDefault() {
        return this.defaultData.getElementDefault(this.element, this.elementDefault);
    }

    renderOnSideMenu(renderedElement) {
        return this.defaultData.render(this, renderedElement);
    }

    setData(data) {
        this.value = data;

        this.renderData();
    }

    renderData() {
        this.defaultData.apply(this.element, this.value);
    }

    removeFromElement() {
        //set default data
        this.setElementToDefault();

        //remove from data array
        for (let index in this.dataArray) {
            const item = this.dataArray[index];
            if (this == item) {

                //remove from array
                this.dataArray.splice(index, 1);

                //remove name from name lookup
                this.dataArrayNames.delete(this.defaultData.name);

                //re render the side menu with element data now removed
                openSideMenu();
                return;
            }
        }

        throw new Error("Tried to remove element data that didn't exist.");
    }
}