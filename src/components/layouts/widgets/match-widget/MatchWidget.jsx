import { BsArrowRight } from '@react-icons/all-files/bs/BsArrowRight';
import React from 'react'
import { Link } from 'react-router-dom';
import MatchWidgetCard from '../../../cards/widget-cards/match-widget-card/MatchWidgetCard'
import "./_matchWidget.scss";

const MatchWidget = () => {
    return (
        <div className="col-md-4">
            <div class="card w-100 matches-widget mb-1 p-2" >
                <h5 className="text-center m-3">Matches Around You</h5>
                <div className="card-matches">
                {
                    [...Array(5)].map((item) => (
                        <MatchWidgetCard />
                    ))
                }
                </div>
            </div>
            <h6 className="text-center mt-2">
            <Link to="suggestion-matches" className="btn btn-primary">See more <BsArrowRight/></Link>
           
            </h6>
        </div>
    )
}

export default MatchWidget
