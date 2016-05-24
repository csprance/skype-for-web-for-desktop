var path = require('path');
var ipc = require('electron').ipcRenderer;
var NativeNotification = Notification;

Notification = function(title, options) {
  var notification = new NativeNotification(title, options);

  ipc.send('change-icon');

  notification.addEventListener('click', () => {
    ipc.send('notification-click');
  });

  return notification;
};
Notification.prototype = NativeNotification.prototype;
Notification.permission = NativeNotification.permission;
Notification.requestPermission = NativeNotification.requestPermission.bind(Notification);

// Turn off notifications for now they're annoying and not skype like
console.log(Notification);


delete Notification
delete window.Notification
