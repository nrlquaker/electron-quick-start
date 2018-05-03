const { ipcRenderer } = require('electron');

document.addEventListener('DOMContentLoaded', () => {
    ipcRenderer.send('set-size', document.body.scrollWidth, document.body.scrollHeight)
})
