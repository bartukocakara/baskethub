import React from 'react'
import {
    Link
  } from "react-router-dom";
import "./_managerWidgetCard.scss";

const ManagerWidgetCard = () => {
    return (
        <>
            <Link >
                <div className="card-body border b-primary m-2 widget-player-card d-flex p-3 rounded">
                    <div className="">
                        <Link to="manager-detail">
                        <h6 className="">Bartu Kocakara, <span>32</span></h6>
                        </Link>
                        <p className="text-center">İstanbul, Turkey</p>
                    </div>
                    <div className="avatar avatar-lg me-2 widget-card-right">
                        <img src="assets/images/faces/2.jpg" alt="" srcset="" />
                    </div>
                </div>
            </Link>
        </>
    )
}

export default ManagerWidgetCard
