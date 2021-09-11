import React from 'react'
import {
    Link
  } from "react-router-dom";
import "./_managerMessageWidgetCard.scss";

const ManagerMessageWidgetCard = () => {
    return (
        <Link to="player-chat">
            <div className="card-body border b-primary m-3 widget-player-card d-flex p-2 rounded">
                <div className="widget-player-text">
                    <h6 className="">Bartu Kocakara</h6>
                    <p className="text-muted cut-text">property specifies whether to clip the content, add a scroll bar, or display overflow content of a block-level element, when it overflows at the top and bottom </p>
                </div>
                <div className="avatar avatar-lg me-2 widget-card-right">
                    <img src="assets/images/faces/2.jpg" alt="" srcset="" />
                </div>
            </div>
        </Link>
    )
}

export default ManagerMessageWidgetCard
