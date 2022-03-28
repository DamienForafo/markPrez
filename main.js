const {BrowserWindow, app, ipcMain} = require("electron");
const {resolve} = require('path');
const zipDirectory = require('./createZip.js');
const fs = require('fs');

const createWindow = () => {
    const mainWindow = new BrowserWindow({
        webPreferences: {
            preload: resolve(__dirname, 'preload.js')
        }
    });
    mainWindow.loadURL("http://localhost:3000");

    ipcMain.on('fullscreenOn', (e, data) => { mainWindow.setFullScreen(true); });
    ipcMain.on('fullscreenOff', (e, data) => { mainWindow.setFullScreen(false); });
    ipcMain.on('validatePrez', (e, data) => {
        console.log('validating prez');
        zipDirectory(data);
        console.log('validated prez');
    });
    ipcMain.on('removePrez', (e, data) => {
        console.log('removing ' + data);
        try {
            fs.unlinkSync(data)
            console.log('removed ' + data);
        } catch(err) {
            console.error(err)
        }
    });
};





const launch = async () => {
    await app.whenReady();
    createWindow();
};

launch();