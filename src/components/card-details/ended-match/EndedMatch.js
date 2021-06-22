import React from 'react'

const EndedMatch = () => {
    return (
        <>
            <h5 className="text-center m-4">Balçova Spor Salonu <span class="badge bg-danger">Ended</span></h5>
            <div className="col-lg-6 col-md-12">
                <div className="card">
                    <div className="card-header">
                        <h4>Court Photos</h4>
                    </div>
                    <div class="card-body">
                        <div id="carouselExampleCaptions" class="carousel slide" style={{ height:"200px" }} data-bs-ride="carousel">
                            <ol class="carousel-indicators">
                                <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"></li>
                                <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" class=""></li>
                                <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></li>
                            </ol>
                            <div class="carousel-inner">
                                <div class="carousel-item carousel-item-next carousel-item-start">
                                    <img src="assets/images/samples/basket-salon1.jpg" class="d-block w-100" style={{ height:"200px" }} alt="..." />
                                    <div class="carousel-caption d-none d-md-block">
                                    </div>
                                </div>
                                <div class="carousel-item active carousel-item-start">
                                    <img src="assets/images/samples/basket-salon2.jpg" class="d-block w-100" style={{ height:"200px" }} alt="..." />
                                    <div class="carousel-caption d-none d-md-block">
                                    </div>
                                </div>
                            </div>
                            <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-md-12">
                <div class="card">
                    <div class="card-content">
                        <div class="card-body text-center   ">
                            <div className="buttons text-center">
                            </div>
                            <br />
                            <h4 class="card-title text-center">Match Details</h4>
                            <hr />
                            <label class="btn-light text-dark p-2">
                                Date - Time : <span class="badge text-dark">21/06/2021 | 12:00 - 13:00</span>
                            </label>
                            <hr />
                            <label class="btn-light text-dark p-2">
                                Player Count : <span class="badge text-dark">8</span>
                            </label>
                            <hr />
                            <label class="btn-light text-dark p-2">
                                Score : <span class="badge text-dark">50-60 </span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12">
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
                                            <span className="avatar-status bg-success"></span>
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
                                            <span className="avatar-status bg-success"></span>
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
        </>
    )
}

export default EndedMatch
