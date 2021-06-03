import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFunniestReviews, getMostHelpfulReviews } from "../../redux/actions/StatActions";
import '../../css/bestReviews.css'


export default function BestReviews() {
    const [limit, setLimit] = useState(3);

    const dispatch = useDispatch();
    const { mostHelpfulReviews } = useSelector((state) => state.GameReducer);

    useEffect(() => {
        dispatch(getMostHelpfulReviews(limit))
    }, [])

    useEffect(() => {
       dispatch(getMostHelpfulReviews(limit))
    }, [dispatch, limit]);


    const titles = [];
    const recommendations = [];
    const votes = [];
    const reviews = [];

    for (const [key, value] of Object.entries(mostHelpfulReviews)) {
        titles.push(value.title);
        recommendations.push(value.recommendation);
        votes.push(value.helpful);
        let review = value.review;
        review = review.replace(/&gt/g, "\n>")
        review = review.replace(/&amp/g, "&");
        reviews.push(review);
    }

    return (
        <div>
            <div className="data-limit">
            <h1>Most Helpful Reviews</h1>
                <div className = 'grid-container'>
                        <div className = 'helpful-reviews'>
                            <h2>Most Helpful Review on Steam</h2> <br/>
                                <p>Game Title: {titles[0]}</p>
                                <p>Recommendation: {recommendations[0]}</p>  
                                <p>{votes[0]} people found this review helpful.</p>
                                <p className = 'review-text'>{reviews[0]}</p>   
                        </div>
                        <div className = 'helpful-reviews'>
                            <h2>Most Helpful Review on Steam</h2> <br/>
                                <p>Game Title: {titles[1]}</p>
                                <p>Recommendation: {recommendations[1]}</p>  
                                <p>{votes[1]} people found this review helpful.</p>
                                <p className = 'review-text'>{reviews[1]}</p>   
                        </div>
                        <div className = 'helpful-reviews'>
                            <h2>Most Helpful Review on Steam</h2> <br/>
                                <p>Game Title: {titles[2]}</p>
                                <p>Recommendation: {recommendations[2]}</p>  
                                <p>{votes[2]} people found this review helpful.</p>
                                <p className = 'review-text'>{reviews[2]}</p>   
                        </div>
                 </div>          
            </div>
        </div>
    );
}