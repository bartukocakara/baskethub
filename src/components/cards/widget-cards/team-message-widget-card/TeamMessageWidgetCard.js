import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import {
    Link
  } from "react-router-dom";
import "./_teamMessageWidgetCard.scss";

const TeamMessageWidgetCard = () => {
    return (
        <Link to="team-message-detail">
            <div className="card-body border b-primary m-3 widget-player-card d-flex p-2 rounded">
                <div className="m-auto">
                    <h6 className="">Oşbo Team</h6>
                    <p className="text-muted">7 Person in this room</p>
                </div>
                <AvatarGroup max={3} className="mt-3">
                    <Avatar alt="Remy Sharp" src="assets/images/faces/2.jpg" />
                    <Avatar alt="Travis Howard" src="assets/images/faces/2.jpg" />
                    <Avatar alt="Cindy Baker" src="assets/images/faces/2.jpg" />
                    <Avatar alt="Agnes Walker" src="assets/images/faces/2.jpg" />
                    <Avatar alt="Trevor Henderson" src="assets/images/faces/2.jpg" />
                </AvatarGroup>
            </div>
        </Link>
    )
}

export default TeamMessageWidgetCard
