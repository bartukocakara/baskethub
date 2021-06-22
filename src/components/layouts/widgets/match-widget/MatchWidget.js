import React from 'react'
import MatchWidgetCard from '../../../cards/widget-cards/match-widget-card/MatchWidgetCard'

const MatchWidget = () => {
    return (
        <div className="col-4">
            <div class="card w-100" >
                <h4 className="text-center">Matches Around You</h4>
                {
                    [...Array(3)].map((item) => (
                        <MatchWidgetCard />
                    ))
                }
            </div>
        </div>
    )
}

export default MatchWidget
