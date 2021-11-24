import React, { useState } from "react";
import firebase from "../firebase/firebaseConfig";
import { getAuth, signInWithPopup, onAuthStateChanged,signOut, GoogleAuthProvider } from "firebase/auth";

const Login = () => {
    const [login,setLogin] = useState(false);
    const [email,setEmail] = useState();
    const initSesion = () => {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // ...
                setLogin(true);
            }).catch((error) => {
                console.log(error);
            });
    }

    const onLogout = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            // Sign-out successful.
            setEmail();
            setLogin(false);
        }).catch((error) => {
            // An error happened.
            console.log(error)
        });
    }

    const validation = () => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setEmail(user.displayName);
            } else {
                console.log("No user signed in");
            }
        });
    }


    return (
        <div>
            {validation()}
            {login === false 
                ? <button onClick={initSesion} style={_styleButton.principal}>Login with Google</button> 
                : 
                <div>
                    <h1>Hello {email}</h1>
                    <button onClick={onLogout} style={{..._styleButton.secondary}}>Logout</button>
                </div> 
            }
        </div>
    );
};

const _styleButton = {
    principal: {
        height: '100px',
        width: '100px'
    },
    secondary: {
        height: '50px',
        width: '100px'
    }
}

export default Login;