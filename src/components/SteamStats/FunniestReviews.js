import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFunniestReviews, getMostHelpfulReviews } from "../../redux/actions/StatActions";
import '../../css/bestReviews.css'


export default function FunniestReviews() {
    const [limit, setLimit] = useState(4);

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
            <h1 className="mt-3"
                    style={{width: '50%',
                            margin: 'auto',
                            textAlign: 'center'}}
                            >Funniest Reviews</h1>
                <br/>
                <div className = 'grid-container'>
                        <div className = 'funny-reviews funniest'>
                                <h4>Game Title: {titles[0]}</h4>
                                <h6>Recommendation: {recommendations[0]}</h6>  
                                <h6>{votes[0]} people found this review funny.</h6>

                                <pre className='review-text'>{reviews[0]}</pre> 
                                <br />
  
                        </div>
                        <div className = 'funny-reviews funny'>
                                <h4>Game Title: {titles[1]}</h4>

                                <h6>Recommendation: {recommendations[1]}</h6>  
                                <h6>{votes[1]} people found this review funny.</h6>
                                <br />

                                <p className='review-text'>{reviews[1]}</p> 
                                <br />
  
                        </div>
                        <div className = 'funny-reviews funny'>
                                <h4>Game Title: {titles[2]}</h4>

                                <h6>Recommendation: {recommendations[2]}</h6>  
                                <h6>{votes[2]} people found this review funny.</h6>
                                <br />

                                <p className='review-text'>{reviews[2]}</p>   
                                <br />

                        </div>
                        <div className = 'funny-reviews funny'>
                                <h4>Game Title: {titles[3]}</h4>

                                <h6>Recommendation: {recommendations[3]}</h6>  
                                <h6>{votes[3]} people found this review funny.</h6>
                                <br />

                                <p className='review-text'>{reviews[3]}</p>  
                                <br />
 
                        </div>
                 </div>          
            </div>
        </div>
    );
}