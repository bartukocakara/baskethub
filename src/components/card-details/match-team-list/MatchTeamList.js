import React from 'react'
import "./_matchTeamList.scss";

const MatchTeamList = () => {
    return (
        <div claclassNamess="col-12">
                <div className="card">
                    <div class="card-body">
                        <ul class="nav nav-tabs match-team-list text-center col-lg-12" id="myTab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <a class="nav-link active" id="home-tab" data-bs-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Team 1</a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a class="nav-link" id="contact-tab" data-bs-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Team 2</a>
                            </li>
                        </ul>
                        <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        {
                            [...Array(5)].map((teamDetail) => (
                                <>
                                    <div className="media d-flex align-items-center">
                                        <div className="avatar me-3">
                                            <img src="assets/images/faces/1.jpg" alt="" srcset="" />
                                            <span claclassNamess="avatar-status bg-success"></span>
                                        </div>
                                        <div className="name flex-grow-1">
                                            <h6 className="mb-0">Fred</h6>
                                            <span className="text-xs">Online</span>
                                        </div>
                                        <div className="name flex-grow-1">
                                            <h6 className="mb-0">Position</h6>
                                            <span className="text-xs">Center</span>
                                        </div>
                                        <div className="name flex-grow-1">
                                            <h6 className="mb-0">Status</h6>
                                            <span className="badge bg-success">Active</span>
                                        </div>
                                    </div>
                                <hr />
                                </>
                            ))
                            }
                        </div>
                        <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                        {
                            [...Array(5)].map((teamDetail) => (
                                <>
                                    <div className="media d-flex align-items-center">
                                        <div className="avatar me-3">
                                            <img src="assets/images/faces/1.jpg" alt="" srcset="" />
                                            <span claclassNamess="avatar-status bg-success"></span>
                                        </div>
                                        <div className="name flex-grow-1">
                                            <h6 className="mb-0">Fred</h6>
                                            <span className="text-xs">Online</span>
                                        </div>
                                        <div className="name flex-grow-1">
                                            <h6 className="mb-0">Position</h6>
                                            <span className="text-xs">Center</span>
                                        </div>
                                        <div className="name flex-grow-1">
                                            <h6 className="mb-0">Status</h6>
                                            <span className="badge bg-success">Active</span>
                                        </div>
                                    </div>
                                <hr />
                                </>
                            ))
                        }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MatchTeamList
