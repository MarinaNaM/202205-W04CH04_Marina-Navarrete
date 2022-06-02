import React from 'react';
import { Actions } from '../actions/Actions';
import { Keyboard } from '../Keyboard/Keyboard';
import './App.css';

function App() {
    return (
        <div className="App">
            <div className="container">
                <span className="message">Calling...</span>
                <main className="phone">
                    <div className="keyboard-container">
                        <Keyboard></Keyboard>
                    </div>
                    <Actions></Actions>
                </main>
            </div>
        </div>
    );
}

export default App;
