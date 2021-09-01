import React from 'react'
import { FiPlusSquare } from "@react-icons/all-files/fi/FiPlusSquare";
import {
    Link
  } from "react-router-dom";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./_courtWidgetCard.scss";

const CourtWidgetCard = () => {
    const notifyFavCourt = () => toast("Court successfully added your favourites", {
        className: 'warning-background',
        progressClassName: 'toast-progress',
        id:"courtWidget"
    });
    return (
        <>
        <Link >
            <div className="card-body border b-primary m-2 widget-player-card d-flex p-3 rounded">
                <FiPlusSquare className="widget-player-icon" color="#FA8602" onClick={notifyFavCourt}/>
                <div className="widget-player-text">
                    <Link to="court-detail">
                    <h6 className="">Bornova Spor Salonu</h6>
                    </Link>
                    <p className="text-center">İstanbul</p>
                </div>
                <div className="avatar-lg me-2 widget-card-right widget-court-card">
                    <img className="w-100 rounded" src="assets/images/samples/hall.jpg" alt="" srcset="" />
                </div>
            </div>
        </Link>
        </>
    )
}

export default CourtWidgetCard
