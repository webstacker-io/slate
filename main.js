const { app, BrowserWindow } = require('electron');
const { dialog, ipcMain } = require('electron');
const path = require('path');




let win;

function createWindow () {

  win = new BrowserWindow({
    width: 600,
    height: 600,
    backgroundColor: '#ffffff',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      enableRemoteModule: false,
      contextIsolation: true,
      sandbox: true
    }
  })


  win.loadURL(`file://${__dirname}/dist/index.html`)

  
  win.on('closed', function () {
    win = null
  })
 // win.webContents.openDevTools()
}

app.on('ready', createWindow);


app.on('window-all-closed', function () {


  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (win === null) {
    createWindow()
  }
})
