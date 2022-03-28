const {BrowserWindow, app, ipcMain} = require("electron");
const {resolve} = require('path');
const zipDirectory = require('./createZip.js');
const fs = require('fs');

const createWindow = () => {
    const mainWindow = new BrowserWindow({
        webPreferences: {
            preload: resolve(__dirname, 'preload.js')
        },
        width : 800,
        height: 500
    });
    mainWindow.loadURL("http://localhost:3000");

    ipcMain.on('fullscreenOn', (e, data) => { mainWindow.setFullScreen(true); });
    ipcMain.on('fullscreenOff', (e, data) => { mainWindow.setFullScreen(false); });
    ipcMain.on('validatePrez', (e, data) => {
        console.log('validating');
        zipDirectory(data);
        console.log('validated');
    });
    ipcMain.on('removePrez', (e, data) => {
        console.log('removing');
        try {
            fs.unlinkSync(data)
            console.log('removed');
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