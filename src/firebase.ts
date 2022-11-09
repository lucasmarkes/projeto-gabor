import firebase from 'firebase/compat/app'; 
import { initializeApp } from 'firebase/app' 
import { getFirestore} from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
	apiKey: "AIzaSyBmU_QgiJMotupUek2KpuLV9PB6vsXoa84",
	authDomain: "fir-se-22-2.firebaseapp.com",
	databaseURL: "https://fir-se-22-2-default-rtdb.firebaseio.com",
	projectId: "fir-se-22-2",
	storageBucket: "fir-se-22-2.appspot.com",
	messagingSenderId: "72717625941",
	appId: "1:72717625941:web:6f0c5a8988deeb9e5f82dc",
	measurementId: "G-6KH57XHGRN"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { db, analytics };
export default firebase