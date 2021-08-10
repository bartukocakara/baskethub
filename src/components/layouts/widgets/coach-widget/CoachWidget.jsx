import React from 'react'
import CoachWidgetCard from '../../../cards/widget-cards/coach-widget-card/CoachWidgetCard'
import "./_coachWidget.scss";

const CoachWidget = () => {
    return (
        <div className="col-4">
            <div class="card w-100 players-widget" >
                <h5 className="text-center m-3">Recommended Coaches</h5>
                <div className="card-player-messages m-2">
                {
                    [...Array(5)].map((coach) => (
                        <CoachWidgetCard />
                    ))
                }
                </div>
            </div>
        </div>
    )
}

export default CoachWidget
