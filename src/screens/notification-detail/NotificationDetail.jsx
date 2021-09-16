import React, { useState } from 'react'
import "./_notificationDetail.scss";
import {
    Link
  } from "react-router-dom";
import ConfirmJoinMatch from '../../components/modals/confirm/ConfirmJoinMatch';

const NotificationDetail = () => {

    const [showConfirmJoinMatch, setConfirmJoinMatchShow] = useState(false);
  
    const handleConfirmJoinMatchClose = () => setConfirmJoinMatchShow(false);
    const handleConfirmJoinMatchShow = () => setConfirmJoinMatchShow(true);
    
    return (
        <>
        <ConfirmJoinMatch handleConfirmJoinMatchClose={handleConfirmJoinMatchClose} show={showConfirmJoinMatch} />

        <div className="row">
            <div className="card">
                <div className="card-header">
                    <h4 className="card-title">Match Request</h4>
                </div>
                <div className="card-body">
                    
                <div className="media fav-court-detail-comment d-flex align-items-center">
                    <div className="avatar me-3">
                        <img src="assets/images/faces/1.jpg" alt="" srcset="" />
                        <span className="avatar-status bg-success"></span>
                    </div>
                    <div className="name flex-grow-1">
                        <h6 className="mb-0">Fred</h6>
                        <span className="text-xs">Online</span>
                    </div>
                    <div className="name flex-grow-1 p-4">
                        <p>Basketball quotes are terrific for motivating and inspiring coaches and athletes. Countless times I’ve recited various quotes to my players or fellow coaches and they always have a positive effect.</p>
                    </div>
                    <div className="name flex-grow-1">
                        <div className="buttons text-center">
                            <button className="btn btn-success" onClick={handleConfirmJoinMatchShow}>Katıl +</button>
                            <Link to="player-chat" className="btn btn-primary">Mesaj</Link>
                            <button className="btn btn-warning">Paylaş</button>
                        </div>
                    </div>
                </div>
                </div>
                <div className="card-footer">
                    
                </div>
            </div>
        </div>
        </>
    )
}

export default NotificationDetail
