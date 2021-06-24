import React from 'react'
import TournamentWidgetCard from '../../../cards/widget-cards/tournament-widget-card/TournamentWidgetCard'

const TournamentWidget = () => {
    return (
        <div className="col-4">
            <div class="card w-100 matches-widget p-2" >
                <h4 className="text-center m-3">Matches Around You</h4>
                <div className="card-matches">
                {
                    [...Array(5)].map((item) => (
                        <TournamentWidgetCard />
                    ))
                }
                </div>
            </div>
        </div>
    )
}

export default TournamentWidget
