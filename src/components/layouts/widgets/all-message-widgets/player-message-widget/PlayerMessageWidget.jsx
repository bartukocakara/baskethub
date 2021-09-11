import React from 'react'
import PlayerMessageWidgetCard from '../../../../cards/widget-cards/message-widget-card/player-message-widget-card/PlayerMessageWidgetCard'
import "./_playerMessageWidget.scss";

const PlayerMessageWidget = () => {
    return (
        <div className="col-md-4">
            <div class="card player-messages-widget w-100 mb-1" >
                <h5 className="text-center m-2">Messages</h5>
                <div className="card-player-messages">
                {
                    [...Array(5)].map((match) => (
                        <PlayerMessageWidgetCard />
                        ))
                }
                </div>
            </div>
        </div>
    )
}

export default PlayerMessageWidget
