import React from 'react'
import MatchWidgetCard from '../../../cards/widget-cards/match-widget-card/MatchWidgetCard'

const MatchWidget = () => {
    return (
        <div className="col-4">
            <div class="card w-100" >
                <div class="card-header widget-header">
                    <h4>Recommended Players</h4>
                </div>
                <MatchWidgetCard />
                <MatchWidgetCard />
                <MatchWidgetCard />
            </div>
        </div>
    )
}

export default MatchWidget
