import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import {
    Link
  } from "react-router-dom";
import "./_matchWidgetCard.scss";

const MatchWidgetCard = () => {
    return (
        <Link to="match-detail">
            <div className="card-body border b-primary m-2 widget-player-card d-flex p-2 rounded">
                <div className="widget-match-text">
                    <h6 className="cut-text mt-1">İstanbul Moda Spor Salonu Match</h6>
                    <p className="text-muted">7 Player in this match</p>
                </div>
                <div className="avatar avatar-lg me-2 widget-card-right">
                <AvatarGroup max={3} >
                        <Avatar alt="Remy Sharp" src="assets/images/faces/2.jpg" />
                        <Avatar alt="Travis Howard" src="assets/images/faces/2.jpg" />
                        <Avatar alt="Cindy Baker" src="assets/images/faces/2.jpg" />
                        <Avatar alt="Agnes Walker" src="assets/images/faces/2.jpg" />
                        <Avatar alt="Trevor Henderson" src="assets/images/faces/2.jpg" />
                    </AvatarGroup>
                </div>
            </div>
        </Link>
    )
}

export default MatchWidgetCard
