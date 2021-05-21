import { getSiblingMaskElements } from '@antv/g2/lib/interaction/action/util';
//import axios from 'axios'
import React from 'react'
import {Bar} from 'react-chartjs-2';
const axios = require('axios');

let backgroundColors = [
    'rgba(54, 162, 235, 0.8)',
    'rgba(255, 206, 86, 0.8)',
    'rgba(255, 99, 132, 0.8)',
    'rgba(75, 192, 192, 0.8)',
    'rgba(153, 102, 255, 0.8)',
    'rgba(255, 159, 64, 0.8)',
    'rgba(199, 199, 199, 0.8)',
    'rgba(83, 102, 255, 0.8)',
    'rgba(40, 159, 64, 0.8)',
    'rgba(210, 199, 199, 0.8)',
  ];
  
  let borderColors = [
    'rgba(54, 162, 235, 1)',
    'rgba(255, 206, 86, 1)',
    'rgba(255, 99, 132, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(153, 102, 255, 1)',
    'rgba(255, 159, 64, 1)',
    'rgba(159, 159, 159, 1)',
    'rgba(83, 102, 255, 1)',
    'rgba(40, 159, 64, 1)',
    'rgba(210, 199, 199, 1)',
  ];
class SteamStat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
        const apiFetch = async () => {
            let response = await getGames("http://steamtistics-be.herokuapp.com/game/most-played/5");
            let popular_games = response.data
            
            let names = []
            let hours = []
            
            for (let i = 0; i < popular_games.length; i++) {
                names.push(popular_games[i].title)
                hours.push(popular_games[i].hours_played)
            }
            this.setState({
                chartState: {
                    labels: names,
                    datasets: [
                        {
                            label: "Top 5 Most Played Games",
                            backgroundColor: backgroundColors,
                            borderColor: borderColors,
                            data: hours
                        }
                    ]
                }    
            });
        }
        apiFetch();
    }

    render() { 
        return (

            <div>
                <h1>Most Played Games</h1>
                <div className="chart-container">
                    {Object.keys(this.state).length &&
                    <Bar
                        data={this.state.chartState}
                        options={{
                            legend:{
                                display:true,
                                position:'bottom'
                            }
                        }}
                    />
                    }
                </div>
            </div>
            
        );
    }
}

async function getGames(url) {
    try {
        let response = await axios.get(url);
        return response

    } catch(error) {
        console.error(error);
    }
}

export default SteamStat;