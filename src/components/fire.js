import firebase from 'firebase';


var firebaseConfig = {
    apiKey: "AIzaSyAMxPP7rVc6-TZgOtNFAoppQFoqIhAMsAQ",
    authDomain: "react-calculator-f6e55.firebaseapp.com",
    projectId: "react-calculator-f6e55",
    storageBucket: "react-calculator-f6e55.appspot.com",
    messagingSenderId: "802299707973",
    appId: "1:802299707973:web:66d2b86c5d2dc4deb8992c",
    measurementId: "G-FHV68800NT"
  };

  var fire = firebase.initializeApp(firebaseConfig);

  export default fire;