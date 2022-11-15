class RenderedElement {
    constructor(name, styles, scripts, properties, render, parent) {
        this.name = name;

        this.styles = styles;

        this.scripts = scripts;

        this.properties = properties;

        this.render = render;

        this.parent = parent;
    }

    onclick() {
        openSideMenu(this);
    }

    //TEMPORARY
    delete() {
        //remove from render
        // this.render.parentElement.removeChild(this.render);
        
        //remove from app tree
        this.parent.removeChild(this);
    }
}