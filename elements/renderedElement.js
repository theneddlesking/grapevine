class RenderedElement {
    constructor(name, styles, scripts, render) {
        this.name = name;

        this.styles = styles;

        this.scripts = scripts;

        this.render = render;
    }

    onclick() {
        openSideMenu(this);
    }

    //TEMPORARY
    delete() {
        this.render.parentElement.removeChild(this.render);
    }
}