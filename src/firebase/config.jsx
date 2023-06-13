import { initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAeVsyZVKyz83SVRcDHHdhrKMwaXZ1C_Vk",
    authDomain: "fir-dcf91.firebaseapp.com",
    projectId: "fir-dcf91",
    storageBucket: "fir-dcf91.appspot.com",
    messagingSenderId: "624005541693",
    appId: "1:624005541693:web:abd243f510e7dc8e195f54"
  };
  const firebase = initializeApp(firebaseConfig);
  export default firebase;
  // eslint-disable-next-line no-unused-vars
  const auth = getAuth(firebase)
  // console.log(auth);
  export const firestore=getFirestore(firebase)
  export const firestorage=getStorage(firebase)