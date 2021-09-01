import React from 'react'
import {
    Link
  } from "react-router-dom";
import "./_trainingWidgetCard.scss";

const TrainingWidgetCard = () => {

    return (
        <>
            <Link to="training-detail">
                <div className="card-body border b-primary m-2 widget-player-card d-flex p-3 rounded">
                    <div className="">
                        <Link to="trainer-detail">
                        <h6 className="">Bartu Kocakara</h6>
                        </Link>
                        <p className="text-center">İstanbul</p>
                    </div>
                    <div className="avatar avatar-lg me-2 widget-card-right">
                        <img src="assets/images/faces/2.jpg" alt="" srcset="" />
                    </div>
                </div>
            </Link>
        </>
    )
}

export default TrainingWidgetCard
