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

        //UNRENDERED scripts
        this.defaultScripts = scripts;
        
        //RENDERED scripts
        this.scripts = scripts;

        this.render = render;

        this.parent = parent;

        this.rootElement = parent == MyClient.currentApp;

        //name of all styles and properties owned by this element for quick lookup
        this.names = {
            styles : new Set([]),
            properties : new Set([]),
            scripts : new Set([]),
        }

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

    getMissingStyles(known) {
        return known.filter(style => !this.hasStyle(style));
    }

    hasStyle(style) {
        return this.names.styles.has(style.name);
    }

    applyProperty(property) {
        this.names.properties.add(property.name);
        property.init(this.render, this.properties, this.names.properties);
    }

    applyScript(script) {
        this.names.scripts.add(script.name);
        script.init(this.render, this.scripts, this.names.scripts);
    }

    applyStyle(style) {
        this.names.styles.add(style.name);
        style.init(this.render, this.styles, this.names.styles);
    }

    applyStyles() {
        this.defaultStyles.forEach(style => this.applyStyle(style));
    }

    applyScripts() {
        this.defaultScripts.forEach(script => this.applyScript(script));
    }

    applyProperties() {
        this.defaultProperties.forEach(property => this.applyProperty(property));
    }

    onclick() {
        openSideMenu(this);
    }

    //element should only be draggable if it is a direct child
    makeDraggable() {
        draggable(this.render, this);
    }

    makeUndraggable() {
        undraggable(this.render);
    }

    //potentially TEMP but I don't think so
    //TODO: Needs to remove all children as well
    delete() {
        //remove from app tree
        this.parent.removeChild(this);
    }
}