import React from 'react'
import { Link } from 'react-router-dom';
import { BsArrowRight } from "@react-icons/all-files/bs/BsArrowRight";


import CoachWidgetCard from '../../../cards/widget-cards/coach-widget-card/CoachWidgetCard'
import "./_coachWidget.scss";

const CoachWidget = () => {
    return (
        <div className="col-4">
            <div class="card w-100 mb-1 players-widget" >
                <h5 className="text-center m-3">Recommended Coaches</h5>
                <div className="card-player-messages m-2">
                {
                    [...Array(5)].map((coach) => (
                        <CoachWidgetCard />
                    ))
                }
                </div>
            </div>
            <h6 className="text-center">
                <Link to="suggestion-coaches" className="btn btn-primary">See more <BsArrowRight/></Link>
            </h6>
        </div>
    )
}

export default CoachWidget
