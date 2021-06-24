import React from 'react'
import TeamWidgetCard from '../../../cards/widget-cards/team-widget-card/TeamWidgetCard'
import "./_teamWidget.scss";

const TeamWidget = () => {
    return (
        <div className="col-4">
            <div class="card team-messages w-100" >
                <h4 className="text-center m-2">Recommended Teams</h4>
                <div className="card-teams p-2">
                {
                    [...Array(10)].map((match) => (
                        <TeamWidgetCard />
                        ))
                }
                </div>
            </div>
        </div>
    )
}

export default TeamWidget
