import React, { useEffect, useState } from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { getMostPlayedGames } from "../../redux/actions/StatActions";
import { GET_MOST_PLAYED_GAMES } from "../../redux/constants/GameConstants";
import {
    backgroundColors,
    borderColors,
} from "../../util/constants/systemSettings";

export default function MostPlayedGame() {
    const [limit, setLimit] = useState(5);

    const [type, setType] = useState("Bar");

    const dispatch = useDispatch();
    const { mostPlayedGames } = useSelector((state) => state.GameReducer);

    const label = [];
    const data = [];

    for (const [key, value] of Object.entries(mostPlayedGames)) {
        label.push(value.title);
        data.push(value.hours_played);
    }

    useEffect(() => {
        dispatch(getMostPlayedGames(limit));
    }, []);

    useEffect(() => {
        dispatch(getMostPlayedGames(limit));
    }, [dispatch, limit]);

    return (
        <div>
            <div className="data-limit">
            <div className="row">
                    <div className="col-6">
                        <select
                            onChange={(e) => {
                                setLimit(e.target.value);
                            }}
                            className="form-select mt-3"
                            name="dataLimit"
                        >
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="15">15</option>
                        </select>
                    </div>
                    <div className="col-6">
                        <select
                            onChange={(e) => {
                                setType(e.target.value);
                            }}
                            className="form-select mt-3"
                            name="dataType"
                        >
                            <option value="Bar">Bar</option>
                            <option value="Doughnut">Doughnut</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="chart-container">
                <h1 
                    className="mt-3"
                    style={{width: '50%',
                            margin: 'auto',
                            textAlign: 'center'}}>
                    Most Played Games
                </h1>
                {type === "Bar" ? (
                    <div style={{ width: '100%', maxWidth: "1000px" }} className="mx-auto">
                        <Bar
                            data={{
                                labels: label,
                                datasets: [
                                    {
                                        label: `Top ${limit} Most Played Games`,
                                        backgroundColor: backgroundColors,
                                        borderColor: borderColors,
                                        borderRadius: 10,
                                        data: data,
                                    },
                                ],
                            }}
                            options={{
                                plugins: {
                                    legend: {
                                        display: false,
                                    },
                                },
                            }}
                        />
                    </div>
                ) : (
                    <div
                        style={{ maxWidth: "700px", marginTop: -100 }}
                        className="mx-auto"
                    >
                        <Doughnut
                            data={{
                                labels: label,
                                datasets: [
                                    {
                                        label: `Top ${limit} Most Played Games`,
                                        backgroundColor: backgroundColors,
                                        borderColor: borderColors,
                                        data: data,
                                    },
                                ],
                            }}
                            options={{
                                plugins: {
                                    legend: {
                                        position: "right",
                                    },
                                },
                            }}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}
