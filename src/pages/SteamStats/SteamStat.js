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
            let popular_response = await getGames("http://steamtistics-be.herokuapp.com/game/most-played/5")
            let popular_games = popular_response.data
            let reviewed_response = await getGames("http://steamtistics-be.herokuapp.com/game/most-reviewed/5")
            let reviewed_games = reviewed_response.data

            console.log(reviewed_games)

            let popular_names = []
            let hours = []
            
            for (let i = 0; i < popular_games.length; i++) {
                popular_names.push(popular_games[i].title)
                hours.push(popular_games[i].hours_played)
            }

            let  reviewed_names = []
            let reviews = []

            for (let i = 0; i < reviewed_games.length; i++) {
                reviewed_names.push(reviewed_games[i].title)
                reviews.push(reviewed_games[i].reviews)
            }

            this.setState({
                popularChartState: {
                    labels: popular_names,
                    datasets: [
                        {
                            label: "Top 5 Most Played Games",
                            backgroundColor: backgroundColors,
                            borderColor: borderColors,
                            data: hours
                        }
                    ]
                },
                reviewChartState: {
                    labels: reviewed_names,
                    datasets: [
                        {
                            label: "Top 5 Most Reviewed Games",
                            backgroundColor: backgroundColors,
                            borderColor: borderColors,
                            data: reviews
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
                <div className="chart-container">
                    <h1>Most Played Games</h1>
                    {Object.keys(this.state).length &&
                    <Bar
                        data={this.state.popularChartState}
                        options={{
                            legend:{
                                display:true,
                                position:'bottom'
                            }
                        }}
                    />
                    }
                </div>
                <div className="chart-container">
                    <h1>Most Reviewed Games</h1>
                    {Object.keys(this.state).length &&
                    <Bar
                        data={this.state.reviewChartState}
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