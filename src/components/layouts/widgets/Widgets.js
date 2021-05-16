import React from 'react'
import WidgetPlayerCard from '../../cards/widget-cards/WidgetPlayerCard';
import Announcement from './announcements/Announcement';
import "./_widget.scss";

const Widgets = () => {
    return (
        <div className="col-md-3 col-lg-4 widgets">
            <Announcement />
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
