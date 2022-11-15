class App extends Element {
    constructor(name, properties, styles, scripts) {
        super(name, properties, styles, scripts, null);

        this.render = document.getElementById("main-module");
    }
}