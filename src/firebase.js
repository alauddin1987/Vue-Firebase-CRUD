import {initializeApp} from 'firebase';

const app = initializeApp ({
    apiKey: "AIzaSyBJchzuzV4oocmnBU1mrdbvF8G1tSpun3Q",
    authDomain: "fir-vue-8e497.firebaseapp.com",
    databaseURL: "https://fir-vue-8e497.firebaseio.com",
    projectId: "fir-vue-8e497",
    storageBucket: "fir-vue-8e497.appspot.com",
    messagingSenderId: "740345042773"
  });

  export const db  = app.database();
  export const namesRef = db.ref('names');