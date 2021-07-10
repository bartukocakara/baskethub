import React from 'react'
import TeamMessageWidgetCard from '../../../cards/widget-cards/team-message-widget-card/TeamMessageWidgetCard'
import "./_teamMessageWidget.scss";

const TeamMessageWidget = () => {
    return (
        <div className="col-md-4">
            <div class="card team-messages-widget w-100" >
                <h4 className="text-center m-3">Team Messages</h4>
                <div className="card-team-messages">
                {
                    [...Array(10)].map((match) => (
                        <TeamMessageWidgetCard />
                    ))
                }
                </div>
            </div>
        </div>
    )
}

export default TeamMessageWidget
