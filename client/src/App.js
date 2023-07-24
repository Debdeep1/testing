import React from 'react';
import {Routes,Route} from "react-router-dom"
import ImageDisplay from './PicDisp';
import Home from './Home'
import Video from './Video'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxR9AIQSSB8xuGRiUve3RoBlLKt3a7Pq0",
  authDomain: "testapp-b5bf0.firebaseapp.com",
  projectId: "testapp-b5bf0",
  storageBucket: "testapp-b5bf0.appspot.com",
  messagingSenderId: "280977854253",
  appId: "1:280977854253:web:74e93d72857c748c428da4",
  measurementId: "G-23HTSJZPWN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const App = () => {
  return (
    <div>
      <h1>My Image App</h1>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/video-screen' element={<Video/>}/>
        <Route path='/image-screen' element={<ImageDisplay/>}/>
      </Routes>
    </div>
  );
};

export default App;
