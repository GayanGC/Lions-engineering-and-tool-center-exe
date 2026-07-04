const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1280,
    height: 800,
    title: 'Lions Engineering',
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true
    }
  });

  // Hide the default menu bar for a cleaner, native app experience
  Menu.setApplicationMenu(null);

  // Load the web application URL
  mainWindow.loadURL('https://lionsengineering.netlify.app');

  // Open external links (non-netlify) in the user's default browser
  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    if (!url.startsWith('https://lionsengineering.netlify.app')) {
      require('electron').shell.openExternal(url);
      return { action: 'deny' };
    }
    return { action: 'allow' };
  });
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});
