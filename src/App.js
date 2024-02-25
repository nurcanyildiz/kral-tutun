import React from 'react'
import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from "./componant/Pages/Home";
import Product from "./componant/Pages/Product";
import Contact from "./componant/Pages/Contact";
import Navigation from "./componant/Navbar/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
    return (
        <>
            <Navigation/>
            <Routes>
                <Route path="Home" element={<Home/>}/>
                <Route path="Product" element={<Product/>}/>
                <Route path="Contact" element={<Contact/>}/>
            </Routes>
        </>
    )
}

export default App;