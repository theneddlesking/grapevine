class Client {
    constructor() {
        this.currentApp = undefined;
    }
}

const MyClient = new Client();

MyClient.currentApp = new App("Test App");

const CurrentApp = MyClient.currentApp;
console.log(CurrentApp);