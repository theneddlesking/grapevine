class App extends Element {
    constructor(name, styles, scripts) {
        super(name, styles, scripts, null);

        this.render = document.getElementById("main-module");
    }
}