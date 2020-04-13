import React, { createContext, useState } from 'react';
import './App.css';
import './components/styles.css'
import NavBar from './components/NavBar'
import CTAText from './components/CTAText'
import Game from './components/Game'
import Footer from './components/Footer'

export const AppContext = createContext();

export default function App() {

    const [ darkModeChecked, setDarkModeChecked ] = useState(false)


    return (
        <div className="App">
            <AppContext.Provider value={{ darkModeChecked, setDarkModeChecked }}>
                <NavBar />
                <div className={ darkModeChecked ? "body-dark" : "body-light" }>
                    <CTAText />
                    <Game />
                </div>
                <Footer />
            </AppContext.Provider>
        </div>
    );
}

