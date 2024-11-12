// firebase-messaging-sw.js (This would require a build tool like Vite/Webpack)\
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyDgp7TZXg_WqV81242349S2zWShJeK9xMBXSZcOU",
    authDomain: "fir-push-notification-89615.firebaseapp.com",
    projectId: "fir-push-notification-89615",
    storageBucket: "fir-push-notification-89615.appspot.com",
    messagingSenderId: "1077819506567",
    appId: "1:1077819506567:web:3855f6a3ba9e15e3a9dd22",
    measurementId: "G-G9SGVF85YJ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get Firebase Messaging instance
const messaging = firebase.messaging();

// Handle background notifications
messaging.setBackgroundMessageHandler(function(payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: payload.notification.icon,
    };

    return self.registration.showNotification(notificationTitle, notificationOptions);
});
