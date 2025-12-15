import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getDatabase, ref, update } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyC3Q0dDlbfU0Ze_ky0Ml11w-45neid8t-g",
    authDomain: "scholar-logger.firebaseapp.com",
    databaseURL: "https://scholar-logger-default-rtdb.firebaseio.com",
    projectId: "scholar-logger",
    storageBucket: "scholar-logger.appspot.com",
    messagingSenderId: "464852136923",
    appId: "1:464852136923:web:f33815c4e67a4953062dfe"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

const loginbtn = document.getElementById('btn5');
const errMsg = document.getElementById('error')
function Authentication() {

    const username = document.getElementById('uid');
    const password = document.getElementById('paw');


    signInWithEmailAndPassword(auth, username.value, password.value)
        .then((userCredential) => {
            const user = userCredential.user;
            const dt = new Date();
            const usertoken = user.email;
            console.log(usertoken)
            sessionStorage.setItem('user', user.uid)
            sessionStorage.setItem('username', user.displayname);
            console.log(user.displayname)
            update(ref(db, "StudentsList/" + user.uid),
                {
                    last_loggedIn: dt,

                })
            location.replace('/public/dashboard.html')
        })
        .catch((error) => {
            errMsg.innerHTML = "Enter Valid Email And Password";
        });
}


loginbtn.addEventListener('click', Authentication);
