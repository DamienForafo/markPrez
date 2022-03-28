const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld(
  'electron',
  {
    fullscreenOn: () => ipcRenderer.send('fullscreenOn'),
    fullscreenOff: () => ipcRenderer.send('fullscreenOff'),
    validatePrez: (paths) => ipcRenderer.send('validatePrez', paths),
    removePrez: (path) => ipcRenderer.send('removePrez', path)
  }
)