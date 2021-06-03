import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFunniestReviews, getMostHelpfulReviews } from "../../redux/actions/StatActions";
import '../../css/bestReviews.css'


export default function FunniestReviews() {
    const [limit, setLimit] = useState(1);

    const dispatch = useDispatch();
    const { funniestReviews } = useSelector((state) => state.GameReducer);

    useEffect(() => {
        dispatch(getFunniestReviews(limit))
    }, [])

    useEffect(() => {
       dispatch(getFunniestReviews(limit));
    }, [dispatch, limit]);


    const titles = [];
    const recommendations = [];
    const votes = [];
    const reviews = [];

    for (const [key, value] of Object.entries(funniestReviews)) {
        titles.push(value.title);
        recommendations.push(value.recommendation);
        votes.push(value.funny);
        let review = value.review;
        review = review.replace(/&gt/g, "\n>")
        review = review.replace(/&amp/g, "&");
        reviews.push(review);
    }

    return (
        <div>
            <div className="data-limit">
            <h1>Funniest Reviews</h1>
                <div className = 'grid-container'>
                        <div className = 'funny-reviews'>
                            <h2>Funniest Review on Steam</h2> <br/>
                                <p>Game Title: {titles[0]}</p>
                                <p>Recommendation: {recommendations[0]}</p>  
                                <p>{votes[0]} people found this review funny.</p>
                                <pre className='review-text'>{reviews[0]}</pre>   
                        </div>
                 </div>          
            </div>
        </div>
    );
}