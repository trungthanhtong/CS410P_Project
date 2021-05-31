import React, { useEffect, useState } from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { getMostReviewedGames } from "../../redux/actions/StatActions";
import { GET_MOST_REVIEWED_GAMES } from "../../redux/constants/GameConstants";
import {
    backgroundColors,
    borderColors,
} from "../../util/constants/systemSettings";

export default function MostReviewedGame() {
    const [limit, setLimit] = useState(5);

    const [type, setType] = useState("Bar");

    const dispatch = useDispatch();
    const { mostReviewedGames } = useSelector((state) => state.GameReducer);

    const label = [];
    const data = [];

    console.log(mostReviewedGames);

    for (const [key, value] of Object.entries(mostReviewedGames)) {
        label.push(value.title);
        data.push(value.reviews);
    }

    console.log(mostReviewedGames);

    useEffect(() => {
        dispatch(getMostReviewedGames(limit))
    }, [])

    useEffect(() => {
       dispatch(getMostReviewedGames(limit));
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
                <h1 className="mt-3">Most Reviewed Games</h1>
                {type === "Bar" ? (
                    <div style={{ maxWidth: "1000px" }} className="mx-auto">
                        <Bar
                            data={{
                                labels: label,
                                datasets: [
                                    {
                                        label: `Top ${limit} Most Reviewed Games`,
                                        backgroundColor: backgroundColors,
                                        borderColor: borderColors,
                                        data: data,
                                    },
                                ],
                            }}
                            options={{
                                plugins: {
                                    legend: {
                                        position: "bottom",
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
                                        label: `Top ${limit} Most Reviewed Games`,
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
