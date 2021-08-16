import React from 'react'
import CourtWidgetCard from '../../../cards/widget-cards/court-widget-card/CourtWidgetCard'
import "./_courtWidget.scss";
import { BsArrowRight } from "@react-icons/all-files/bs/BsArrowRight";
import { Link } from 'react-router-dom';

const CourtWidget = () => {
    return (
        <div className="col-md-4">
            <div class="card w-100 mb-1 courts-widget" >
                
            <h5 className="text-center m-3">Recommended Courts</h5>
                <div className="card-court">
                {
                    [...Array(5)].map((item) => (
                        <CourtWidgetCard />
                    ))
                }
                </div>
            </div>
            <h6 className="text-center">
                <Link className="btn btn-primary">See more <BsArrowRight/></Link>
            </h6>
        </div>
    )
}

export default CourtWidget
