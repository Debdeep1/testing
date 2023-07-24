import React from 'react';
import {Routes,Route} from "react-router-dom"
import ImageDisplay from './PicDisp';
import Home from './Home'
import Video from './Video'
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
