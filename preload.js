const { ipcRenderer } = require('electron')

process.once('loaded', () => {
  window.addEventListener('message', evt => {
    if (evt.data.type === 'AllowFloderSelection') {
      ipcRenderer.send('AllowFloderSelection')
    }
  })
})
