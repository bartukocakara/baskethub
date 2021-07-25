import React from 'react'
import MatchMessageWidgetCard from "../../../cards/widget-cards/match-message-widget-card/MatchMessageWidgetCard"

const MatchMessageWidget = () => {
    return (
        <div className="col-4">
        <div class="card team-messages-widget w-100" >
            <h4 className="text-center m-3">Match Messages</h4>
            <div className="card-team-messages">
            {
                [...Array(10)].map((match) => (
                    <MatchMessageWidgetCard />
                ))
            }
            </div>
        </div>
    </div>
    )
}

export default MatchMessageWidget
