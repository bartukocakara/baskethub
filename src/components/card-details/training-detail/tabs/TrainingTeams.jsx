import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import {
    Link
  } from "react-router-dom";
const TrainingTeams = () => {
    return (
        <>
        <div className="row">
            {
                [...Array(10)].map((TrainingTeamsList) => (
                    <div className="col-3 mt-2">
                    <div className="card m-1 border rounded shadow text-center card-shadow">
                        <h4 className="card-title text-center mt-2">Bornova Team</h4>
                        <div className="card-content card-body p-0 m-auto">
                            <AvatarGroup max={3} >
                                <Avatar alt="Remy Sharp" src="assets/images/faces/2.jpg" />
                                <Avatar alt="Travis Howard" src="assets/images/faces/2.jpg" />
                                <Avatar alt="Cindy Baker" src="assets/images/faces/2.jpg" />
                                <Avatar alt="Agnes Walker" src="assets/images/faces/2.jpg" />
                                <Avatar alt="Trevor Henderson" src="assets/images/faces/2.jpg" />
                            </AvatarGroup>
                            <div className="mt-3 text-center">
                                <Link to="team-detail" className="btn btn-light my-2">
                                    Details
                                </Link>
                                <div className="col-md-4"></div>
                        </div>
                    </div>
                </div>
            </div>
            ))
            }
        </div>
    </>
    )
}

export default TrainingTeams
