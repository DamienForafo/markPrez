const { contextBridge, ipcRenderer } = require('electron');

window.exposeInMainWorld(
  'electron',
  {
    fullscreenOn: () => ipcRenderer.send('fullscreenOn')
  }
)