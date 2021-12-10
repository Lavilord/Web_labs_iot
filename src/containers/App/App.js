import React from "react";
import './App.css';
import {Topbar} from "../Navigation/Topbar/Topbar";
import {Footer} from "../Navigation/Footer/Footer";
import {Homepage} from "../Pages/Home/Homepage";
import {Catalog} from "../Pages/Catalog/Catalog";
import {BrowserRouter, Route, Routes} from "react-router-dom";

export const App = () => (
    <BrowserRouter>
        <div className="App">
            <Topbar />
            <Routes>
                <Route path={'/'} element={<Homepage />} />
                <Route path={'/catalog'} element={<Catalog />} />
                <Route path={'/cart'} element={<h1>Hello cart</h1>} />
            </Routes>
            <Footer />
        </div>
    </BrowserRouter>
)
export default App;
