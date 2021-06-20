import React from 'react'
import { FiPlusSquare } from "@react-icons/all-files/fi/FiPlusSquare";
import {
    Link
  } from "react-router-dom";

const MatchWidgetCard = () => {
    return (
        <Link to="match-detail">
            <div className="card-body border b-primary m-3 widget-player-card d-flex p-2">
                <FiPlusSquare className="widget-player-icon" color="#FA8602"/>
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

export default MatchWidgetCard
