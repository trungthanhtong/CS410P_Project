import axios from 'axios'
import React from 'react'

export default function SteamStat() {
    let axios = require('axios');

    var popular = axios.get("http://steamtistics-be.herokuapp.com/game/most-played/5")
        .then(response => console.log(response))
        .then(function format(response) {
            let results = document.createElement('div');
            results.id = "most_popular";
            

        })
    
    

    return (
        <div>
            <h1>Most Played Games</h1>
        </div>
    )
}
