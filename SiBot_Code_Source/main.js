const { app, BrowserWindow, ipcMain } = require('electron'); 
const path = require('path');

function createWindow() {
  let win = new BrowserWindow({
    width: 485,
    height: 580,
    frame: false, 
    icon: path.join(__dirname, 'SiBot.ico'),
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false 
    }
  });

  win.loadFile('index.html');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

//  écouteurs d'événements IPC pour le contrôle de la fenêtre
ipcMain.on('window-minimize', (event) => {
  BrowserWindow.getFocusedWindow().minimize();
});

ipcMain.on('window-maximize', (event) => {
  const window = BrowserWindow.getFocusedWindow();
  if (window.isMaximized()) {
    window.unmaximize();
  } else {
    window.maximize();
  }
});

ipcMain.on('window-close', (event) => {
  BrowserWindow.getFocusedWindow().close();
});

/*
#####################################
#  .-. .-')       (`-.   _  .-')    #
#  \  ( OO )    _(OO  )_( \( -O )   #
#  ,--. ,--.,--(_/   ,. \,------.   #
#  |  .'   /\   \   /(__/|   /`. '  #
#  |      /, \   \ /   / |  /  | |  #
#  |     ' _) \   '   /, |  |_.' |  #
#  |  .   \    \     /__)|  .  '.'  #
#  |  |\   \    \   /    |  |\  \   #
#  `--' '--'     `-'     `--' '--'  #
#####################################
*/


