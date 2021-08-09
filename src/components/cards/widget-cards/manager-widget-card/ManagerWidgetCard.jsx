import React from 'react'
import { FiPlusSquare } from "@react-icons/all-files/fi/FiPlusSquare";
import {
    Link
  } from "react-router-dom";
import "./_managerWidgetCard.scss";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ManagerWidgetCard = () => {

    const notifyFavTrainer = () => toast("Trainer successfully added your favourites", {
        className: 'warning-background',
        progressClassName: 'toast-progress',
        id:"trainerWidget"
    });
    return (
        <>
            <Link >
                <div className="card-body border b-primary m-2 widget-player-card d-flex p-3 rounded">
                    <FiPlusSquare className="widget-player-icon" color="#FA8602" onClick={notifyFavTrainer}/>
                    <div className="">
                        <Link to="manager-detail">
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

export default ManagerWidgetCard
