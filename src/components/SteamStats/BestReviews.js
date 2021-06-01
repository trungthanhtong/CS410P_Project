import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFunniestReviews, getMostHelpfulReviews } from "../../redux/actions/StatActions";
import '../../css/bestReviews.css'


export default function BestReviews() {
    const [limit, setLimit] = useState(1);

    const dispatch = useDispatch();
    const { funniestReviews } = useSelector((state) => state.GameReducer);
    const { mostHelpfulReviews } = useSelector((state) => state.GameReducer);


    useEffect(() => {
        dispatch(getFunniestReviews(limit))
        dispatch(getMostHelpfulReviews(limit))
    }, [])

    useEffect(() => {
       dispatch(getFunniestReviews(limit));
       dispatch(getMostHelpfulReviews(limit))
    }, [dispatch, limit]);


    const f_titles = [];
    const f_recommendations = [];
    const f_votes = [];
    const f_reviews = [];

    for (const [key, value] of Object.entries(funniestReviews)) {
        f_titles.push(value.title);
        f_recommendations.push(value.recommendation);
        f_votes.push(value.funny);
        let review = value.review;
        review = review.replace(/&gt/g, "\n>")
        review = review.replace(/&amp/g, "&");
        f_reviews.push(review);
    }

    const h_titles = [];
    const h_recommendations = [];
    const h_votes = [];
    const h_reviews = [];

    for (const [key, value] of Object.entries(mostHelpfulReviews)) {
        h_titles.push(value.title);
        h_recommendations.push(value.recommendation);
        h_votes.push(value.helpful);
        let review = value.review;
        review = review.replace(/&gt/g, "\n>")
        review = review.replace(/&amp/g, "&");
        h_reviews.push(review);
    }

    return (
        <div>
            <div className="data-limit">
            <h1>Funniest And Most Helpful Reviews</h1>
                <div className = 'grid-container'>
                        <div className = 'funny-reviews'>
                            <h2>Funniest Review on Steam</h2> <br/>
                                <p>Game Title: {f_titles[0]}</p>
                                <p>Recommendation: {f_recommendations[0]}</p>  
                                <p>{f_votes[0]} people found this review funny.</p>
                                <pre className='review-text'>{f_reviews[0]}</pre>   
                        </div>
                        <br/>
                        <div className = 'helpful-reviews'>
                            <h2>Most Helpful Review on Steam</h2> <br/>
                                <p>Game Title: {h_titles[0]}</p>
                                <p>Recommendation: {h_recommendations[0]}</p>  
                                <p>{h_votes[0]} people found this review helpful.</p>
                                <p className = 'review-text'>{h_reviews[0]}</p>   
                        </div>
                 </div>          
            </div>
        </div>
    );
}