// renderer.js
const { ipcRenderer } = require('electron');

window.onload = () => {
  document.getElementById('minimize-btn').addEventListener('click', () => {
    ipcRenderer.send('window-minimize');
  });

  /*document.getElementById('maximize-btn').addEventListener('click', () => {
    ipcRenderer.send('window-maximize');
  });*/

  document.getElementById('close-btn').addEventListener('click', () => {
    ipcRenderer.send('window-close');
  });
};

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