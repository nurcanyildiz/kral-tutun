import React from 'react'
import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from "./componant/Pages/Home";
import Product from "./componant/Pages/Product";
import Contact from "./componant/Pages/Contact";
import Navigation from "./componant/Navbar/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";

/* Multi language */
import i18next from "i18next";
import {initReactI18next} from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'flag-icon-css/css/flag-icon.min.css';
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.css'


i18next
    .use(HttpApi)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        supportedLngs: ['tr', 'en', 'ar',],
        fallbackLng: 'en',
        debug: false,
        // Options for language detector
        detection: {
            order: ['path', 'cookie', 'htmlTag'],
            caches: ['cookie'],
        },
        // react: { useSuspense: false },
        backend: {
            loadPath: '/assets/locales/{{lng}}/translation.json',
        },
    })

/* Multi language */


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