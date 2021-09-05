import React from 'react'
import {
    Link
  } from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import { AiOutlineFieldTime } from "@react-icons/all-files/ai/AiOutlineFieldTime";

const Trainings = () => {
    return (
        <>
        {
            [...Array(5)].map((i, match) => (
                <div className="col-md-10 col-sm-12 m-auto" key={i}>
                    <h6 className="text-center">14 Haziran</h6>
                    <div class="card component-card_8 m-auto mb-3">
                        <div class="card-body p-3">
                            <div class="progress-order">
                                <div class="progress-order-body">
                                    <div class="row mt-4">
                                        <div class="col-md-12 row">
                                            <div class="col-md-1">
                                                <h6><Link to="ended-match-detail" className="p-2 border border-primary bg-primary rounded text-light">i</Link></h6>
                                            </div>
                                            <div className="col-md-3 text-center">
                                                <h6 className="ml-3"><Link to="court-detail">Alsancak Spor salonu</Link></h6>
                                            </div>
                                            <div className=" col-md-3 text-center">
                                            <AiOutlineFieldTime size={25} className="text-primary m-1"/>
                                                <p className="prop-name w-25 p-2 badge "></p>
                                                <h6 className="ml-3">15:00 - 16:00</h6>
                                            </div>
                                            <div className="col-md-5 d-flex">
                                            <AvatarGroup max={4} className="text-center m-1">
                                                <Avatar alt="Remy Sharp" src="assets/images/faces/2.jpg" />
                                                <Avatar alt="Travis Howard" src="assets/images/faces/2.jpg" />
                                                <Avatar alt="Cindy Baker" src="assets/images/faces/2.jpg" />
                                                <Avatar alt="Agnes Walker" src="assets/images/faces/2.jpg" />
                                                <Avatar alt="Trevor Henderson" src="assets/images/faces/2.jpg" />
                                            </AvatarGroup>
                                            <p className="m-1">player joined</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) )
        }
        <nav aria-label="Page navigation ">
            <ul className="pagination pagination-primary match-pagination">
                <li className="page-item"><Link class="page-link">Prev</Link></li>
                <li className="page-item"><Link class="page-link">1</Link></li>
                <li className="page-item active"><Link class="page-link">2</Link></li>
                <li className="page-item"><Link class="page-link">3</Link></li>
                <li className="page-item"><Link class="page-link">Next</Link></li>
            </ul>
        </nav>
        </>
    )
}

export default Trainings
