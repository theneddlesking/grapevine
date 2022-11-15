class RenderedElement {
    constructor(name, styles, scripts, properties, render, parent) {
        this.name = name;

        this.styles = styles;

        this.scripts = scripts;

        //UNRENDERED properties 
        this.defaultProperties = properties;

        //actual RENDERED properties
        this.properties = [];

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
        this.styles.forEach(style => style.apply(this.render));
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