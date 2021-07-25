import React from 'react'
import TrainingWidgetCard from '../../../cards/widget-cards/training-widget-card/TrainingWidgetCard'
import "./_trainingWidget.scss";

const TrainingWidget = () => {
    return (
        <div className="col-4">
            <div class="card w-100 players-widget" >
                <h5 className="text-center m-3">Recommended Trainings</h5>
                <div className="card-player-messages m-2">
                {
                    [...Array(5)].map((player) => (
                        <TrainingWidgetCard />
                    ))
                }
                </div>
            </div>
        </div>
    )
}

export default TrainingWidget
