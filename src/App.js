import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Download from './Pages/Download';
import Help from './Pages/Help';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="*" element={<Download/>} />
      <Route path="/" element={<Download/>} />
      <Route path='/help' element={<Help/>}/>
      <Route path='/Help' element={<Help/>}/>
    </Routes>
  </BrowserRouter>
  );
};

export default App;
