import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFunniestReviews, getMostHelpfulReviews } from "../../redux/actions/StatActions";
import '../../css/bestReviews.css'


export default function BestReviews() {
    const [limit, setLimit] = useState(4);

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
        review = review.replace(/&gt/g, "\n>");
        review = review.replace(/&amp/g, "&");
        /*
        if (review.length > 1000) {
            review = review.slice(0,1000)
            review = review.concat(" ...")
        };
        */
        reviews.push(review);
    }

    return (
        <div>
            <div className="data-limit">
            <h1 className="mt-3"
                    style={{width: '50%',
                            margin: 'auto',
                            textAlign: 'center'}}>Most Helpful Reviews</h1>
                <br/>
                <div className = 'grid-container'>
                        <div className = 'helpful-reviews most-helpful'>
                                <h4>Game Title: {titles[0]}</h4>
                                <h6>Recommendation: {recommendations[0]}</h6>  
                                <h6>{votes[0]} people found this review helpful.</h6>
                                <br />
                                <p className = 'review-text'>{reviews[0]}</p>   
                        </div>
                        <div className = 'helpful-reviews helpful'>
                                <h4>Game Title: {titles[1]}</h4>
                                <h6>Recommendation: {recommendations[1]}</h6>  
                                <h6>{votes[1]} people found this review helpful.</h6>
                                <br />

                                <p className = 'review-text'>{reviews[1]}</p> 
                                <br />
  
                        </div>
                        <div className = 'helpful-reviews helpful'>
                                <h4>Game Title: {titles[2]}</h4>
                                <h6>Recommendation: {recommendations[2]}</h6>  
                                <h6>{votes[2]} people found this review helpful.</h6>
                                <br />

                                <p className = 'review-text'>{reviews[2]}</p>   
                                <br />

                        </div>
                        <div className = 'helpful-reviews helpful'>
                                <h4>Game Title: {titles[3]}</h4>
                                <h6>Recommendation: {recommendations[3]}</h6>  
                                <h6>{votes[3]} people found this review helpful.</h6>
                                <br />

                                <p className = 'review-text'>{reviews[3]}</p> 
                                <br />
  
                        </div>
                 </div>          
            </div>
        </div>
    );
}