import React from 'react';
import './App.css';
import './components/styles.css'
import NavBar from './components/NavBar'
import CTAText from './components/CTAText'
import Game from './components/Game'
import Footer from './components/Footer'

function App() {
    return (
        <div className="App">
            <NavBar />
            <CTAText />
            <Game />
            <Footer />
        </div>
    );
}


export default App;
