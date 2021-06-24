import React from 'react'
import CourtWidgetCard from '../../../cards/widget-cards/court-widget-card/CourtWidgetCard'
import "./_courtWidget.scss";

const CourtWidget = () => {
    return (
        <div className="col-4">
            <div class="card w-100 courts-widget" >
                
                <h4 className="text-center mt-2">Recommended Courts</h4>
                <div className="card-court">
                {
                    [...Array(5)].map((item) => (
                        <CourtWidgetCard />
                    ))
                }
                </div>
            </div>
        </div>
    )
}

export default CourtWidget
