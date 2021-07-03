import React from 'react'

import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail";
import {
    Link,
  } from "react-router-dom";
const FavTeams = () => {
    return (
        <>
           <div className="widget-todo-item p-2 col-12">
                <div className="d-flex mb-1">
                    <div className="d-flex align-items-center w-75">
                        <i data-feather="list" className="cursor-move"></i>
                        <div className="checkbox checkbox-shadow m-2">
                            <input type="checkbox" className="form-check-input" id="checkbox1" />
                        </div>
                        <h6 className="m-2">Bornova Team</h6>
                    </div>
                    <div className="widget-todo-item-action d-flex align-items-center">
                        <AvatarGroup max={3} className="m-2" >
                            <Avatar alt="Remy Sharp" src="assets/images/faces/2.jpg" />
                            <Avatar alt="Travis Howard" src="assets/images/faces/2.jpg" />
                            <Avatar alt="Cindy Baker" src="assets/images/faces/2.jpg" />
                            <Avatar alt="Agnes Walker" src="assets/images/faces/2.jpg" />
                            <Avatar alt="Trevor Henderson" src="assets/images/faces/2.jpg" />
                        </AvatarGroup>
                        <Link to="team-chat" className="m-2">
                            <AiOutlineMail size={25} />
                        </Link>
                    </div>
                </div>
            </div>
            <hr /> 
        </>
    )
}

export default FavTeams
