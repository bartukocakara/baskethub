import { BsArrowRight } from '@react-icons/all-files/bs/BsArrowRight';
import React from 'react'
import { Link } from 'react-router-dom';
import TrainingWidgetCard from '../../../cards/widget-cards/training-widget-card/TrainingWidgetCard'
import "./_trainingWidget.scss";

const TrainingWidget = () => {
    return (
        <div className="col-4">
            <div class="card w-100 players-widget mb-1" >
                <h5 className="text-center m-3">Recommended Trainings</h5>
                <div className="card-player-messages m-2">
                {
                    [...Array(5)].map((player) => (
                        <TrainingWidgetCard />
                    ))
                }
                </div>
            </div>
            <h6 className="text-center mt-2">
                <Link to="suggestion-trainings" className="btn btn-primary">See more <BsArrowRight/></Link>
           
            </h6>
        </div>
    )
}

export default TrainingWidget
