import React from "react";
import './App.css';
import {Topbar} from "../containers/Navigation/Topbar/Topbar";
import {Footer} from "../containers/Navigation/Footer/Footer";
import {Homepage} from "../containers/Pages/Home/Homepage";
import {Catalog} from "../containers/Pages/Catalog/Catalog";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {AnimalPage} from "../containers/Pages/AnimalPage/AnimalPage";

export const App = () => (
    <BrowserRouter>
        <div className="App">
            <Topbar />
            <Routes>
                <Route path={'/'} element={<Homepage />} />
                <Route path={'/catalog'}>
                    <Route path='' element={<Catalog />} />
                    <Route path='animal/:animalId' element={<AnimalPage />} />
                </Route>
                <Route path={'/cart'} element={<h1>Hello cart</h1>} />
                <Route path='*' element={<h1>404</h1>} />
            </Routes>
            <Footer />
        </div>
    </BrowserRouter>
)
export default App;
