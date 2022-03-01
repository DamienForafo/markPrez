const {BrowserWindow, app} = require("electron");

const createWindow = () => {
    const mainWindow = new BrowserWindow({width : 800, height: 500});
    mainWindow.loadURL("http://localhost:3000");
};

const launch = async () => {
    await app.whenReady();
    createWindow();
};

launch();