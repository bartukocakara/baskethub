import React from 'react'
import PlayerWidgetCard from '../../../cards/widget-cards/player-widget-card/PlayerWidgetCard'
import "./_playerWidget.scss";

const PlayerWidget = () => {
    return (
        <div className="col-4">
            <div class="card w-100 players-widget" >
                <h5 className="text-center m-3">Recommended Players</h5>
                <div className="card-player-messages m-2">
                {
                    [...Array(5)].map((player) => (
                        <PlayerWidgetCard />
                    ))
                }
                </div>
            </div>
        </div>
    )
}

export default PlayerWidget
