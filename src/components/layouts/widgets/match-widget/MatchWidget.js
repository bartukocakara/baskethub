import React from 'react'
import MatchWidgetCard from '../../../cards/widget-cards/match-widget-card/MatchWidgetCard'
import "./_matchWidget.scss";

const MatchWidget = () => {
    return (
        <div className="col-md-4">
            <div class="card w-100 matches-widget p-2" >
                <h4 className="text-center m-3">Matches Around You</h4>
                <div className="card-matches">
                {
                    [...Array(5)].map((item) => (
                        <MatchWidgetCard />
                    ))
                }
                </div>
            </div>
        </div>
    )
}

export default MatchWidget
