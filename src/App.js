import logo from './logo.svg';
import City from './Components/City';
import Village from './Components/Village';
import Country from './Components/Country';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import ErrorPage from './Components/ErrorPage';
import CityDetail from './Components/CityDetail';
import Weather from './Components/Weather';
import CountryDetails from './Components/CountryDetails';
import CountryDetail from './Components/CountryDetails';

const App = () => { 

    const data = [
        {
        "id": 0,
        "name": "Paris",
        "description": "Paris , c'est l'amour",
        "image": "https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGFyaXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
    },
    {
        "id": 1,
        "name": "Bern",
        "description": "Bern soo nice",
        "image": "https://images.unsplash.com/photo-1597947967084-339b2116a030?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
    },
    {
        "id": 2,
        "name": "Tokyo",
        "description": "Tokoyo so advance city",
        "image": "https://images.unsplash.com/photo-1573455494060-c5595004fb6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=840&q=80"
    },
    {
        "id": 3,
        "name": "Soeul",
        "description": "Soeul K-pop",
        "image": "https://images.unsplash.com/photo-1554310603-d39d43033735?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
    
    ];

    const country = [
        {
        "id": 0,
        "name": "Tibet",
        "description": "Top of the world",
        "image": "http://cdn.shopify.com/s/files/1/0761/0911/products/flag2.png?v=1645197241"
    },
    {
        "id": 1,
        "name": "India",
        "description": "Indian food",
        "image": "https://images.news18.com/ibnlive/uploads/2021/08/national-flag-16289132954x3.jpg"
    },
    {
        "id": 2,
        "name": "France",
        "description": "French perfumes",
        "image": "https://cf.ltkcdn.net/french/images/orig/285049-2022x1348-french-flag-in-paris.jpg"
    },
    {
        "id": 3,
        "name": "Switzerland",
        "description": "Swiss chocolate",
        "image": "https://images.unsplash.com/photo-1618493075021-1bbe5deebedf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3dpc3MlMjBmbGFnfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
    },]


    
    return ( <
        Router >
        <
        Navbar / >
        <Routes>

        <
        Route exact path = "/city"
        element = { < City names={data}/
            >  
        }
        / >

        <
        Route exact path = "/city/:name"
        element = { <CityDetail names={data} /
            >
        }
        / >

        <
        Route exact path = "/village"
        element = { < Village / > }
        />

        <
        Route exact path = "/country"
        element = { < Country names={ country }/ > }
        />
        <
        Route exact path = "/country/:name"
        element = { <CountryDetail names={ country } /
            >
        }
        / >

        <Route path="*" element={<ErrorPage />} />
        
        <Route exact path="/weather" 
            element={ <Weather/>}
        />        
        <
        /Routes>
        </Router>
    );
}

export default App;