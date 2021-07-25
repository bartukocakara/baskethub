import React from 'react'
import PlayerWidgetCard from './components/cards/widget-cards/player-widget-card/PlayerWidgetCard';
import "./_widget.scss";

const Widgets = () => {
    return (
        <div className="col-4 widgets">
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

export default Widgets
