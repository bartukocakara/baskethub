import React from 'react'
import "./_myTeamsCard.scss";
import {
    Link
  } from "react-router-dom";
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail";

  import Avatar from '@material-ui/core/Avatar';
  import AvatarGroup from '@material-ui/lab/AvatarGroup';
const MyTeamsCard = () => {
    return (
        <div className="col-md-4 feed-card feed-my-teams-card">
            <div className="card shadow">
                <h4 className="card-title text-center">Bornova Team</h4>
                <div className="card-content card-body">
                    <AvatarGroup max={3} >
                        <Avatar alt="Remy Sharp" src="assets/images/faces/2.jpg" />
                        <Avatar alt="Travis Howard" src="assets/images/faces/2.jpg" />
                        <Avatar alt="Cindy Baker" src="assets/images/faces/2.jpg" />
                        <Avatar alt="Agnes Walker" src="assets/images/faces/2.jpg" />
                        <Avatar alt="Trevor Henderson" src="assets/images/faces/2.jpg" />
                    </AvatarGroup>
                    <div className="d-flex mt-4">
                        <Link to="my-team-detail" className="btn btn-light w-50 m-auto">
                            Details
                        </Link>
                        <div className="col-md-4"></div>
                        <Link to="team-chat" className="btn btn-warning w-50">
                            <AiOutlineMail width="100px" />
                        </Link>
                </div>
                </div>
                
            </div>
        </div>
    )
}

export default MyTeamsCard
