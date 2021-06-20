import React from 'react'
import PlayerWidgetCard from '../../../cards/widget-cards/player-widget-card/PlayerWidgetCard'
const PlayerWidget = () => {
    return (
        <div className="col-4">
            <div class="card w-100" >
                <div class="card-header widget-header">
                    <h4>Recommended Players</h4>
                </div>
                <PlayerWidgetCard />
                <PlayerWidgetCard />
                <PlayerWidgetCard />
            </div>
        </div>
    )
}

export default PlayerWidget
