import { BsArrowRight } from '@react-icons/all-files/bs/BsArrowRight';
import React from 'react'
import { Link } from 'react-router-dom';
import TeamWidgetCard from '../../../cards/widget-cards/team-widget-card/TeamWidgetCard'
import "./_teamWidget.scss";

const TeamWidget = () => {
    return (
        <div className="col-md-4">
            <div class="card team-messages w-100 mb-1" >
                <h5 className="text-center m-3">Recommended Teams</h5>
                <div className="card-teams p-2">
                {
                    [...Array(10)].map((match) => (
                        <TeamWidgetCard />
                        ))
                }
                </div>
            </div>
            <h6 className="text-center">
                <Link to="suggestion-teams" className="btn btn-primary">See more <BsArrowRight/></Link>
            </h6>
        </div>
    )
}

export default TeamWidget
