import React from 'react'
import {
    Link
  } from "react-router-dom";
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail";

  import Avatar from '@material-ui/core/Avatar';
  import AvatarGroup from '@material-ui/lab/AvatarGroup';
const Teams = () => {
    return (
        <div className="row mt-2">
            <h5 className="text-center text-primary mb-4">Teams</h5>
            {
                [...Array(5)].map((team) => (
                    <div className="col-md-4 feed-card feed-my-teams-card">
                        <div className="card border shadow ">
                            <h4 className="card-title text-center">Bornova Team</h4>
                            <div className="card-content card-body">
                                <div className="d-flex">
                                <AvatarGroup max={3} className="m-1" >
                                    <Avatar alt="Remy Sharp" src="assets/images/faces/2.jpg" />
                                    <Avatar alt="Travis Howard" src="assets/images/faces/2.jpg" />
                                    <Avatar alt="Cindy Baker" src="assets/images/faces/2.jpg" />
                                    <Avatar alt="Agnes Walker" src="assets/images/faces/2.jpg" />
                                    <Avatar alt="Trevor Henderson" src="assets/images/faces/2.jpg" />
                                </AvatarGroup>
                                <span className="m-1">people</span>
                                </div>
                                <div className="d-flex mt-4">
                                    <Link to="my-team-detail" className="btn btn-light w-50 m-auto">
                                        Details
                                    </Link>
                                    <div className="col-md-4"></div>
                                    <Link to="team-chat" className="btn btn-warning ">
                                        <AiOutlineMail width="100px" />
                                    </Link>
                            </div>
                            </div>
                            
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Teams
