import { BsArrowRight } from '@react-icons/all-files/bs/BsArrowRight';
import React from 'react'
import { Link } from 'react-router-dom';
import TrainerMessageWidgetCard from '../../../../cards/widget-cards/message-widget-card/trainer-message-widget-card/TrainerMessageWidgetCard'
import "./_trainerMessageWidget.scss";

const TrainerMessageWidget = () => {
    return (
        <div className="col-md-4">
            <div class="card team-messages-widget w-100 mb-1" >
                <h4 className="text-center m-3">Trainer Messages</h4>
                <div className="card-team-messages">
                {
                    [...Array(10)].map((match) => (
                        <TrainerMessageWidgetCard />
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

export default TrainerMessageWidget
