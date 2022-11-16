class RenderedElement {
    constructor(name,  properties, styles, scripts, render, parent) {
        this.name = name;

        //UNRENDERED styles
        this.defaultStyles = styles;

        //RENDERED styles
        this.styles = [];

        //UNRENDERED properties 
        this.defaultProperties = properties;

        //RENDERED properties
        this.properties = [];

        this.scripts = scripts;

        this.render = render;

        this.parent = parent;

        this.rootElement = parent == MyClient.currentApp;

        this.init();
    }

    init() {
        this.applyProperties();
        this.applyStyles();
        this.applyScripts();

        if (this.rootElement) {
            this.makeDraggable();
        }
    }

    applyStyles() {
        this.defaultStyles.forEach(style => style.init(this.render, this.styles));
    }

    applyScripts() {
        this.scripts.forEach(script => script.apply(this.render));
    }

    applyProperties() {
        this.defaultProperties.forEach(property => property.init(this.render, this.properties));
    }

    onclick() {
        openSideMenu(this);
    }

    //element should only be draggable if it is a direct child
    makeDraggable() {
        draggable(this.render, this);
    }

    //potentially TEMP but I don't think so
    //TODO: Needs to remove all children as well
    delete() {
        //remove from app tree
        this.parent.removeChild(this);
    }
}