import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: 'AIzaSyDGcTkLD3fG-jr8d3YYK29kOyMWM21uaBM',
  authDomain: 'jsr-914-bd451.firebaseapp.com',
  projectId: 'jsr-914-bd451',
  storageBucket: 'jsr-914-bd451.appspot.com',
  messagingSenderId: '592008847079',
  appId: '1:592008847079:web:81ceddd711160632b14c42',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;