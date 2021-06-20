import React from 'react'
import TeamWidgetCard from '../../../cards/widget-cards/team-widget-card/TeamWidgetCard'

const TeamWidget = () => {
    return (
        <div className="col-4">
            <div class="card w-100" >
                <div class="card-header widget-header">
                    <h4>Recommended Players</h4>
                </div>
                <TeamWidgetCard />
                <TeamWidgetCard />
                <TeamWidgetCard />
            </div>
        </div>
    )
}

export default TeamWidget
