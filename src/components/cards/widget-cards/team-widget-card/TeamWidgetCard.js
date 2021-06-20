import React from 'react'
import {
    Link
  } from "react-router-dom";
const TeamWidgetCard = () => {
    return (
        <Link to="player-detail">
            <div className="card-body border b-primary m-3 widget-player-card d-flex p-2">
                <div className="widget-player-text">
                    <h6 className="">Bartu Kocakara</h6>
                    <p className="text-muted">İstanbul</p>
                </div>
                <div className="avatar avatar-lg me-2 widget-card-right">
                    <img src="assets/images/faces/2.jpg" alt="" srcset="" />
                </div>
            </div>
        </Link>
    )
}

export default TeamWidgetCard
