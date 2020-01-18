import React from 'react';
import '../App.css';
import StarWars from '../assets/background.jpg';

export default function Home() {
    return (
        <div className="contain-home">
            <img src={StarWars} alt="A background"/>
            <div className="middle-contain">
                <h1>Welcome to Star Wars Tunaiku</h1>
                <p>Are you ready to expolre another space?</p>
            </div>
        </div>
    );
}
