import { BsArrowRight } from '@react-icons/all-files/bs/BsArrowRight'
import React from 'react'
import { Link } from 'react-router-dom'
import MatchMessageWidgetCard from "../../../cards/widget-cards/match-message-widget-card/MatchMessageWidgetCard"

const MatchMessageWidget = () => {
    return (
        <div className="col-4">
        <div class="card team-messages-widget mb-1 w-100" >
            <h4 className="text-center m-3">Match Messages</h4>
            <div className="card-team-messages">
            {
                [...Array(10)].map((match) => (
                    <MatchMessageWidgetCard />
                ))
            }
            </div>
        </div>
        <h6 className="text-center mt-2">
            <Link className="btn btn-primary">See more <BsArrowRight/></Link>
        </h6>
    </div>
    )
}

export default MatchMessageWidget
