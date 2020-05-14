import Firebase from 'firebase';
let firebaseConfig = {
    apiKey: "AIzaSyBxLusoHthrPxWOUjWl12RkC5ITXrioOMY",
    authDomain: "acit-3650-react-native-258316.firebaseapp.com",
    databaseURL: "https://acit-3650-react-native-258316.firebaseio.com",
    projectId: "acit-3650-react-native-258316",
    storageBucket: "acit-3650-react-native-258316.appspot.com",
    messagingSenderId: "54373031943",
    appId: "1:54373031943:web:151e321b148fc322f2caa2"
};
let app = Firebase.initializeApp(firebaseConfig);
export const db = app.database();
