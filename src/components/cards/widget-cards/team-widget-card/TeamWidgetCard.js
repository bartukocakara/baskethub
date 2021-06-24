import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import {
    Link
  } from "react-router-dom";
const TeamWidgetCard = () => {
    return (
        <Link to="team-detail">
            <div className="card-body border b-primary m-3 widget-player-card d-flex p-2 rounded">
                <div className="widget-player-text">
                    <h6 className="">Karşıyaka Team</h6>
                    <p className="text-muted">5 Person in this team</p>
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

export default TeamWidgetCard
