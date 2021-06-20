import React from 'react'
import WidgetPlayerCard from '../../cards/widget-cards/WidgetPlayerCard';
import "./_widget.scss";

const Widgets = () => {
    return (
        <div className="col-4 widgets">
            <div class="card w-100" >
                <div class="card-header widget-header">
                    <h4>Recommended Players</h4>
                </div>
                <WidgetPlayerCard />
                <WidgetPlayerCard />
                <WidgetPlayerCard />
            </div>
        </div>
    )
}

export default Widgets
