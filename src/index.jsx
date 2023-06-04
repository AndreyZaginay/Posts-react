import React, { createContext } from 'react';
import { createRoot } from 'react-dom/client';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

import { App } from './App';
import './assets/styles';

firebase.initializeApp({
        apiKey: "AIzaSyB6l2wIYhTbRDw0DZuJQIivBUUGsURTawY",
        authDomain: "posts-react-auth.firebaseapp.com",
        projectId: "posts-react-auth",
        storageBucket: "posts-react-auth.appspot.com",
        messagingSenderId: "327827981582",
        appId: "1:327827981582:web:da99cb889ae19839de035f",
        measurementId: "G-Z90R3D5ECQ"
    }
);

export const Context = createContext(null);

const auth = firebase.auth();
const firestore = firebase.firestore();

const root = createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value={{
        firebase,
        auth,
        firestore
    }}>
        <React.StrictMode><App /></React.StrictMode>
    </Context.Provider>
);
