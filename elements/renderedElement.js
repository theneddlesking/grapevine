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

        this.init();
    }

    init() {
        this.applyProperties();
        this.applyStyles();
        this.applyScripts();
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

    //TEMPORARY
    delete() {
        //remove from render
        // this.render.parentElement.removeChild(this.render);
        
        //remove from app tree
        this.parent.removeChild(this);
    }
}