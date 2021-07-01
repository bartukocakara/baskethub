import React from 'react'
import { FiPlusSquare } from "@react-icons/all-files/fi/FiPlusSquare";
import {
    Link
  } from "react-router-dom";
import "./_playerWidgetCard.scss";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const PlayerWidgetCard = () => {

    const notify = () => toast("Wow so easy!");
    return (
        <>
        <ToastContainer />
        <Link >
            <div className="card-body border b-primary m-2 widget-player-card d-flex p-3">
                <FiPlusSquare className="widget-player-icon" color="#FA8602" onClick={notify}/>
                <div className="widget-player-text">
                    <Link to="player-detail">
                    <h6 className="">Bartu Kocakara</h6>
                    </Link>
                    <p className="text-muted">İstanbul</p>
                </div>
                <div className="avatar avatar-lg me-2 widget-card-right">
                    <img src="assets/images/faces/2.jpg" alt="" srcset="" />
                </div>
            </div>
        </Link>
        </>
    )
}

export default PlayerWidgetCard
