const {BrowserWindow, app, ipcMain} = require("electron");
// ALLER VOIR ICI : https://www.electronjs.org/fr/docs/latest/api/context-bridge

const createWindow = () => {
    const mainWindow = new BrowserWindow({width : 800, height: 500});
    mainWindow.loadURL("http://localhost:3000");
    ipcMain.on('fullscreenOn', (e, data) => { console.log('wesh'); });
    //mainWindow.maximize();
    //mainWindow.setFullScreen(true);

};

const launch = async () => {
    await app.whenReady();
    createWindow();
};

launch();