import { BsArrowRight } from '@react-icons/all-files/bs/BsArrowRight';
import React from 'react'
import { Link } from 'react-router-dom';
import TeamMessageWidgetCard from '../../../../cards/widget-cards/message-widget-card/team-message-widget-card/TeamMessageWidgetCard'
import "./_teamMessageWidget.scss";

const TeamMessageWidget = () => {
    return (
        <div className="col-md-4">
            <div class="card team-messages-widget w-100 mb-1" >
                <h4 className="text-center m-3">Team Messages</h4>
                <div className="card-team-messages">
                {
                    [...Array(10)].map((match) => (
                        <TeamMessageWidgetCard />
                    ))
                }
                </div>
            </div>
            <h6 className="text-center">
                <Link className="btn btn-primary">See more <BsArrowRight/></Link>
            </h6>
        </div>
    )
}

export default TeamMessageWidget
