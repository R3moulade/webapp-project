import {initializeApp} from 'firebase/app'
import { getAuth } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCVL4JxOaATpChf0gv4QWdcmC1Py60GBYM",
  authDomain: "webapp-exam.firebaseapp.com",
  projectId: "webapp-exam",
  storageBucket: "webapp-exam.appspot.com",
  messagingSenderId: "307119678137",
  appId: "1:307119678137:web:667f9d382b5d804d867168"
};

  const app = initializeApp(firebaseConfig);

  export const storage = getStorage(app);
  export const db = getFirestore(app);
  export const auth =getAuth(app);