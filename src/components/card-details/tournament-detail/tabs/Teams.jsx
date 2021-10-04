import React from 'react'
import {
    Link
  } from "react-router-dom";
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail";

  import Avatar from '@material-ui/core/Avatar';
  import AvatarGroup from '@material-ui/lab/AvatarGroup';
import { FaHandshake } from '@react-icons/all-files/fa/FaHandshake';
import { AiOutlineFileSearch } from '@react-icons/all-files/ai/AiOutlineFileSearch';
const Teams = () => {
    return (
        <div className="row mt-2">
            <h5 className="text-center text-primary mb-4">Teams</h5>
            {
                [...Array(5)].map((team) => (
                    <div className="col-md-4 feed-card feed-my-teams-card">
                        <div className="card border shadow ">
                            <h4 className="card-title mt-2 text-center">Bornova Team</h4>
                            <h6 className="text-center">Istanbul <span>-TR</span> </h6>
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
                                <div className="d-flex justify-content-between mt-4">
                                    <Link to="team-detail">
                                        <AiOutlineFileSearch size={30} className="my-1 mx-1"/>
                                    </Link>
                                    <Link to="team-detail" className="btn btn-warning">
                                        Join <FaHandshake />
                                    </Link>
                                    <Link to="team-chat">
                                        <AiOutlineMail size={30} />
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
