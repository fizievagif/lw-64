import React from 'react';
import {Route, Routes} from "react-router-dom";
import Contacts from "./Containers/Contacts/Contacts";
import Home from "./Containers/Home/Home";
import About from "./Containers/About/About";
import Add from "./Containers/Add/Add";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div>
      <header>
        <Navbar/>
      </header>
      <main className="container">
        <Routes>
          <Route path="/" element={(
            <Home/>
          )}/>
          <Route path="/add" element={(
            <Add/>
          )}/>
          <Route path="/about" element={(
            <About/>
          )}/>
          <Route path="/contacts" element={(
            <Contacts/>
          )}/>
          <Route path='*' element={<h1>Not Found</h1>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
