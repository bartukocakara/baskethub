import { BsArrowRight } from '@react-icons/all-files/bs/BsArrowRight';
import React from 'react'
import { Link } from 'react-router-dom';
import TrainerWidgetCard from '../../../cards/widget-cards/trainer-widget-card/TrainerWidgetCard'
import "./_trainerWidget.scss";

const TrainerWidget = () => {
    return (
        <div className="col-4">
            <div class="card w-100 players-widget mb-1" >
                <h5 className="text-center m-3">Recommended Trainers</h5>
                <div className="card-player-messages m-2">
                {
                    [...Array(5)].map((player) => (
                        <TrainerWidgetCard />
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

export default TrainerWidget
