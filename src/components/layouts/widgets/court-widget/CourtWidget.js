import React from 'react'
import CourtWidgetCard from '../../../cards/widget-cards/court-widget-card/CourtWidgetCard'

const CourtWidget = () => {
    return (
        <div className="col-4">
            <div class="card w-100" >
                <div class="card-header widget-header">
                    <h4>Recommended Players</h4>
                </div>
                <CourtWidgetCard />
                <CourtWidgetCard />
                <CourtWidgetCard />
            </div>
        </div>
    )
}

export default CourtWidget
