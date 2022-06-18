import React from 'react'
import './Login.css'
import { auth, provider, db } from '../../firebaseConf'
import { getAuth, signOut } from "firebase/auth";
import {useNavigate} from 'react-router-dom'
import {useAuthState} from 'react-firebase-hooks/auth'; 
import { useEffect} from 'react'
//import { doc, setDoc } from "firebase/firestore"; 
import firebase from 'firebase/compat/app';
//import photo from './loginPhoto.png'
import GoogleButton from 'react-google-button'

function Login() {

    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const signIn = () => {
        auth.signInWithPopup(provider).catch(alert)
    }

    const signOut = () => {
        auth.signOut().catch(alert)
    }

//     let setUser = ( async (user) => {
//         await setDoc(doc(db, 'users', user.email), {
//             name: user.displayName,
//             email: user.email,
//             //photoURL: user.photoURL
//         })
//         return
// })
   
    useEffect(() => {
        if (user) {
          navigate("/");
        } 
        console.log(user)
      }, [user]);

  return (
    <div style={{backgroundColor: "white", textAlign: "center"}} className="login">
        <h1>Login</h1>
        <img style={{width: "545px"}} src="https://one.rohankurella.com/static/media/loginPhoto.6263aef1a57d20f562c5.png" alt="" />
        <GoogleButton style={{margin: "auto"}} onClick={signIn} />
    </div>
  )
}

export default Login