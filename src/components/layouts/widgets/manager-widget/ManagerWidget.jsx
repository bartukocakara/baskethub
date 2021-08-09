import React from 'react'
import ManagerWidgetCard from '../../../cards/widget-cards/manager-widget-card/ManagerWidgetCard'
import "./_managerWidget.scss";

const ManagerWidget = () => {
    return (
        <div className="col-4">
            <div class="card w-100 players-widget" >
                <h5 className="text-center m-3">Recommended Trainers</h5>
                <div className="card-player-messages m-2">
                {
                    [...Array(5)].map((manager) => (
                        <ManagerWidgetCard />
                    ))
                }
                </div>
            </div>
        </div>
    )
}

export default ManagerWidget
