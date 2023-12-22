import firebase from 'firebase';

if (!firebase.apps.length) {
firebase.initializeApp({
  apiKey: "AIzaSyAfSAlQvOBdc73ZN6hbVQnJqzccFKzTPpE",
  authDomain: "aplikasi-pengaduan-masya-a5c02.firebaseapp.com",
  projectId: "aplikasi-pengaduan-masya-a5c02",
  storageBucket: "aplikasi-pengaduan-masya-a5c02.appspot.com",
  messagingSenderId: "112531831005",
  appId: "1:112531831005:web:711babd39879f6313d4334"

})
}

  const Fire = firebase;
  
  export default Fire;