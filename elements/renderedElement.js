class RenderedElement {
    constructor(name, styles, scripts, render, parent) {
        this.name = name;

        this.styles = styles;

        this.scripts = scripts;

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