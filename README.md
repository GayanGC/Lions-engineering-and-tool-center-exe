# Lions Engineering Desktop App Wrapper

This project packages `https://lionsengineering.netlify.app` into a native Windows executable (`.exe`) using **Electron**.

## Prerequisites
* **Node.js** installed on your system.

## Setup & Running

1. **Install Dependencies** (downloads Electron and packaging tools):
   ```bash
   npm install
   ```

2. **Run in Development Mode** (runs the app locally to test):
   ```bash
   npm run start
   ```

3. **Package as a Windows executable (.exe)**:
   ```bash
   npm run package
   ```
   This will create a `dist/` directory containing the `Lions Engineering-win32-x64` folder. Inside, you will find `Lions Engineering.exe`.
