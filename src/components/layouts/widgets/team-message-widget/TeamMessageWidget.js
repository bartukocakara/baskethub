import React from 'react'
import TeamMessageWidgetCard from '../../../cards/widget-cards/team-message-widget-card/TeamMessageWidgetCard'

const TeamMessageWidget = () => {
    return (
        <div className="col-4">
            <div class="card w-100" >
                <div class="card-header widget-header">
                    <h4>Recommended Players</h4>
                </div>
                <TeamMessageWidgetCard />
                <TeamMessageWidgetCard />
                <TeamMessageWidgetCard />
            </div>
        </div>
    )
}

export default TeamMessageWidget
