import React from 'react'

import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
const TrainingTeams = () => {
    return (
        <div className="container">
            <div className="d-flex justify-content-between">
                <h6 className="text-center">Pick your favourite TrainingTeams you want to train with</h6>
                <input type="text" className="form-control w-25 m-auto" placeholder="Search" />
            </div>
            <div className="TrainingTeams m-3 overflow-x">
            {
                [...Array(5)].map((player) => (
                    <span className="d-inline-block m-2">
                        <div className="card border rounded">
                            <span className="text-center fw-bold">Karşıyaka Team</span>
                            <div className="card-body text-center">
                                <div class="avatar avatar-lg d-flex">
                                    <AvatarGroup max={4} >
                                        <Avatar alt="Remy Sharp" src="assets/images/faces/6.jpg" />
                                        <Avatar alt="Travis Howard" src="assets/images/faces/1.jpg" />
                                        <Avatar alt="Cindy Baker" src="assets/images/faces/4.jpg" />
                                        <Avatar alt="Agnes Walker" src="assets/images/faces/2.jpg" />
                                        <Avatar alt="Trevor Henderson" src="assets/images/faces/2.jpg" />
                                    </AvatarGroup>
                                    <div class="custom-control custom-checkbox m-2">
                                        <input type="checkbox" class="form-check-input form-check-primary" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </span>
                ))
            }
            </div>
        </div>
    )
}

export default TrainingTeams
