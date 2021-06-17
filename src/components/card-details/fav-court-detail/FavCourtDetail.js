import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
  } from "react-router-dom";
import Day from './calendar/Day';
import Month from './calendar/Month';
import Year from './calendar/Year';
import "./_favCourtDetail.scss";

const FavCourtDetail = () => {
    return (
        <div className="row">
            <div className="col-6">
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
            <div className="col-6">
                <div class="card">
                    <div class="card-content">
                        <div class="card-body text-center">
                            <h5>Dr. Cavit Spor Salonu</h5>
                            <div className="buttons text-center">
                                <Link to="team-message-detail" className="btn btn-primary">Mesaj</Link>
                                <button className="btn btn-warning">Paylaş</button>
                            </div>
                            <br />
                            <h4 class="card-title text-center">Court Details</h4>
                            <hr />
                            <label class="btn btn-primary">
                                Hygiene : <span class="badge">21/06/2021 | 12:00 - 13:00</span>
                            </label>
                            <hr />
                            <label class="btn btn-warning ">
                                Response : <span class="badge bg-transparent">8</span>
                            </label>
                            <hr />
                            <label class="btn btn-success ">
                                Intensity <span class="badge bg-transparent">1-3</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div claclassNamess="col-12">
                <div className="card">
                    <div class="card-body">
                        <ul class="nav nav-tabs match-team-list text-center col-lg-12" id="myTab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <a class="nav-link active" id="home-tab" data-bs-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Reservation Calendar</a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a class="nav-link" id="contact-tab" data-bs-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Comments</a>
                            </li>
                        </ul>
                        <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <h5 className="text-center">2021</h5>
                        <Router>
                            <Year />
                        <Switch>
                            <Route exact path="/year" component={Year} />
                            <Route path="/month" component={Month} />
                            <Route path="/days" component={Day} />

                        </Switch>
                        </Router>
                        </div>
                        <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                        {
                            [...Array(5)].map((teamDetail) => (
                                <>
                                    <div className="media fav-court-detail-comment d-flex align-items-center">
                                        <div className="avatar me-3">
                                            <img src="assets/images/faces/1.jpg" alt="" srcset="" />
                                            <span claclassNamess="avatar-status bg-success"></span>
                                        </div>
                                        <div className="name flex-grow-1">
                                            <h6 className="mb-0">Fred</h6>
                                            <span className="text-xs">Online</span>
                                        </div>
                                        <div className="name flex-grow-1 p-4">
                                            <p>Basketball quotes are terrific for motivating and inspiring coaches and athletes. Countless times I’ve recited various quotes to my players or fellow coaches and they always have a positive effect.</p>
                                        </div>
                                        <div className="name flex-grow-1">
                                            <div id="basic" class="star-rating" style={{ width: "160px", height: "32px", backgroundSize: "32px" }} title="5/5"><div class="star-value" style={{ backgroundSize: "32px", width: "0%" }}></div></div>
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
        </div>
    )
}

export default FavCourtDetail
