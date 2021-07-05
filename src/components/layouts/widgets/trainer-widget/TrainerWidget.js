import React from 'react'
import TrainerWidgetCard from '../../../cards/widget-cards/trainer-widget-card/TrainerWidgetCard'
import "./_trainerWidget.scss";

const TrainerWidget = () => {
    return (
        <div className="col-4">
            <div class="card w-100 players-widget" >
                <h5 className="text-center m-3">Recommended Trainers</h5>
                <div className="card-player-messages m-2">
                {
                    [...Array(5)].map((player) => (
                        <TrainerWidgetCard />
                    ))
                }
                </div>
            </div>
        </div>
    )
}

export default TrainerWidget
