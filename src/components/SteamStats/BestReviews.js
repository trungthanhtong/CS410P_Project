import React, { useEffect, useState } from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { getFunniestReviews } from "../../redux/actions/StatActions";
import {
    backgroundColors,
    borderColors,
} from "../../util/constants/systemSettings";

export default function BestReviews() {
    const [limit, setLimit] = useState(3);

    const dispatch = useDispatch();
    const { funniestReviews } = useSelector((state) => state.GameReducer);
    
    console.log(funniestReviews);

    useEffect(() => {
        dispatch(getFunniestReviews(limit))
    }, [])

    useEffect(() => {
       dispatch(getFunniestReviews(limit));
    }, [dispatch, limit]);

    return (
        <div>
            <div className="data-limit">
                    <div className="chart-container">
                        <h1>Funniest And Most Helpful Reviews</h1>
                    </div>            
            </div>
        </div>
    );
}