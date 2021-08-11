import React, { useState } from 'react'
import { FcMoneyTransfer } from "@react-icons/all-files/fc/FcMoneyTransfer";
import { FcCalendar } from "@react-icons/all-files/fc/FcCalendar";
import { RiUserStarLine } from "@react-icons/all-files/ri/RiUserStarLine";
import { BsPeopleFill } from "@react-icons/all-files/bs/BsPeopleFill";
import { AiFillStar } from "@react-icons/all-files/ai/AiFillStar";
import { AiTwotoneAppstore } from "@react-icons/all-files/ai/AiTwotoneAppstore";
import { FcEditImage } from "@react-icons/all-files/fc/FcEditImage";

import {
    Link,
  } from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import "./_createMatch.scss";
import EditMatchEventPayment from '../../../components/modals/edit-match-event-payment/EditMatchEventPayment';
import Name from './tabs/Name';
import Payment from './tabs/Payment';
import Date from './tabs/Date';
import CourtUsage from './tabs/CourtUsage';
import Coupon from './tabs/Coupon';
import Players from './tabs/Players';
import Teams from './tabs/Teams';
import Prizes from './tabs/Prizes';
import Notes from './tabs/Notes';
import Courts from './tabs/Courts';
import Privacy from './tabs/Privacy';

const CreateMatch = () => {

    const [showEditPayment, setEditPayment] = useState(false);
  
    const handleEditPaymentClose = () => setEditPayment(false);
    const handleEditPaymentShow = () => setEditPayment(true);
    return (
        <>
        <EditMatchEventPayment handleEditPaymentClose={handleEditPaymentClose} show={showEditPayment}  />
            <h5 className="text-center">Create Match Event</h5>
            <div class="col-md-12">
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-sm-12 col-md-3">
                                <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                    <a class="nav-link" id="v-pills-team-tab" data-bs-toggle="pill" href="#v-pills-team" role="tab" aria-controls="v-pills-team" aria-selected="false">Call all fav players <RiUserStarLine/></a>
                                    <a class="nav-link" id="v-pills-player-tab" data-bs-toggle="pill" href="#v-pills-player" role="tab" aria-controls="v-pills-player" aria-selected="false">Call all fav teams <BsPeopleFill /> <AiFillStar size={10}/></a>
                                    <a class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Call by played matches <AiTwotoneAppstore/></a>
                                    <a class="nav-link active" id="v-pills-settings-tab" data-bs-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="true">Create without option +</a>
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-9 ">
                                <div class="tab-content" id="v-pills-tabContent">
                                    <div class="tab-pane fade" id="v-pills-team" role="tabpanel" aria-labelledby="v-pills-team-tab">
                                        <div className="row">
                                            <div className="col-md-9 d-flex m-auto">
                                                <h6 className="m-3 text-center ml-4">You are sending match request to all of your favourite players!</h6>
                                                <AvatarGroup max={4} className="m-3">
                                                    <Avatar alt="Remy Sharp" src="assets/images/faces/2.jpg" />
                                                    <Avatar alt="Travis Howard" src="assets/images/faces/2.jpg" />
                                                    <Avatar alt="Cindy Baker" src="assets/images/faces/2.jpg" />
                                                    <Avatar alt="Agnes Walker" src="assets/images/faces/2.jpg" />
                                                    <Avatar alt="Trevor Henderson" src="assets/images/faces/2.jpg" />
                                                </AvatarGroup>
                                            </div>
                                            <div className="col-md-4 text-center">
                                                <FcMoneyTransfer size={25}/>
                                                <ul>
                                                    <li><label>Payment option 1</label><h6>Bank Card</h6></li>
                                                    <li><label>Payment option 2</label><h6>Seperate Payment</h6></li>
                                                    <li><label>Payment option 3</label><h6>Pre-paid</h6></li>
                                                </ul>
                                                <button className="btn btn-primary"onClick={handleEditPaymentShow}>Edit</button>
                                            </div>
                                            <div className="col-md-8 row text-center">
                                                <FcCalendar size={50}/>
                                                <div className="col-md-6 mb-5">
                                                        <h6 for="first-name-icon" className="m-2">Date</h6>
                                                    <input type="date" className="form-control m-2" />
                                                </div>
                                                <div className="col-md-3 mt-2">
                                                    <h6 for="first-name-icon">Start</h6>
                                                    <input type="time" className="form-control m-2" />
                                                </div>
                                                <div className="col-md-3 mt-2">
                                                    <h6 for="first-name-icon">End</h6>
                                                    <input type="time" className="form-control m-2" />
                                                </div>
                                            </div>
                                            <div className="col-md-6 m-auto m-3 p-2 text-center">
                                                <Link to="court-detail"><h6>Alsancak Spor salonu</h6></Link>
                                                <div id="carouselExampleCaptions" class="carousel slide m-auto" style={{ height:"175px", width:"100%" }} data-bs-ride="carousel">
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
                                            <div className="col-md-12 m-3 p-2 text-center">
                                                <button class="btn btn-lg bg-primary text-light">Create Match Event</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="v-pills-player" role="tabpanel" aria-labelledby="v-pills-player-tab">
                                        <h6 className="m-1">You are sending match request to all of your favourite teams!</h6>
                                    </div>
                                    <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                                        <div className="row">
                                            {
                                                [...Array(5)].map((matchTeam) => (
                                                <div className=" p-2 col-md-4 col-xs-12 ml-1 mb-2 text-center">
                                                    <label className="fw-bold m-2">Karşıyaka spor salonu</label>
                                                    <Link to="ended-match-detail">
                                                    <div className="border rounded w-100 craete-match-card d-flex p-2">
                                                        <AvatarGroup max={3} className="m-2" >
                                                            <Avatar alt="Remy Sharp" src="assets/images/faces/2.jpg" />
                                                            <Avatar alt="Travis Howard" src="assets/images/faces/2.jpg" />
                                                            <Avatar alt="Cindy Baker" src="assets/images/faces/2.jpg" />
                                                            <Avatar alt="Agnes Walker" src="assets/images/faces/2.jpg" />
                                                            <Avatar alt="Trevor Henderson" src="assets/images/faces/2.jpg" />
                                                        </AvatarGroup>
                                                        <div className="name ms-4">
                                                        <h6 className="text-muted mt-2 m-auto">12/06-2021</h6>
                                                        </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                                ))
                                            }
                                            
                                        </div>
                                    </div>
                                    <div class="tab-pane fade active show" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                                        <div class="card-body">
                                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link active" id="name-tab" data-bs-toggle="tab" href="#name" role="tab" aria-controls="name" aria-selected="true">Name</a>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link" id="payment-tab" data-bs-toggle="tab" href="#payment" role="tab" aria-controls="payment" aria-selected="false">Payment</a>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link" id="date-tab" data-bs-toggle="tab" href="#date" role="tab" aria-controls="date" aria-selected="false">Date</a>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link" id="court-usage-tab" data-bs-toggle="tab" href="#court-usage" role="tab" aria-controls="court-usage" aria-selected="false">Court usage</a>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link" id="coupon-tab" data-bs-toggle="tab" href="#coupon" role="tab" aria-controls="coupon" aria-selected="false">Coupon</a>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link" id="players-tab" data-bs-toggle="tab" href="#players" role="tab" aria-controls="players" aria-selected="false">Players</a>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link" id="teams-tab" data-bs-toggle="tab" href="#teams" role="tab" aria-controls="teams" aria-selected="false">Teams</a>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link" id="courts-tab" data-bs-toggle="tab" href="#courts" role="tab" aria-controls="courts" aria-selected="false">Courts</a>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link" id="prizes-tab" data-bs-toggle="tab" href="#prizes" role="tab" aria-controls="prizes" aria-selected="false">Prizes</a>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link" id="notes-tab" data-bs-toggle="tab" href="#notes" role="tab" aria-controls="notes" aria-selected="false">Notes</a>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link" id="privacy-tab" data-bs-toggle="tab" href="#privacy" role="tab" aria-controls="privacy" aria-selected="false">Privacy</a>
                                                </li>
                                            </ul>
                                            <div class="tab-content" id="myTabContent">
                                                <div class="tab-pane fade show active" id="name" role="tabpanel" aria-labelledby="name-tab">
                                                    <Name />
                                                </div> 
                                                <div class="tab-pane fade" id="payment" role="tabpanel" aria-labelledby="payment-tab">
                                                   <Payment />
                                                </div>
                                                <div class="tab-pane fade" id="date" role="tabpanel" aria-labelledby="date-tab">
                                                    <Date />
                                                </div>
                                                <div class="tab-pane fade" id="court-usage" role="tabpanel" aria-labelledby="court-usage-tab">
                                                    <CourtUsage />
                                                </div>
                                                <div class="tab-pane fade" id="coupon" role="tabpanel" aria-labelledby="coupon-tab">
                                                    <Coupon />
                                                </div> 
                                                <div class="tab-pane fade" id="players" role="tabpanel" aria-labelledby="players-tab">
                                                    <Players />
                                                </div> 
                                                <div class="tab-pane fade" id="teams" role="tabpanel" aria-labelledby="teams-tab">
                                                    <Teams />  
                                                </div>
                                                <div class="tab-pane fade" id="courts" role="tabpanel" aria-labelledby="courts-tab">
                                                    <Courts />
                                                </div>
                                                <div class="tab-pane fade" id="prizes" role="tabpanel" aria-labelledby="prizes-tab">
                                                    <Prizes />
                                                </div>
                                                <div class="tab-pane fade" id="notes" role="tabpanel" aria-labelledby="notes-tab">
                                                    <Notes />
                                                </div>
                                                <div class="tab-pane fade" id="privacy" role="tabpanel" aria-labelledby="privacy-tab">
                                                    <Privacy />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-auto d-flex m-auto">
                                                <div class="form-check m-2">
                                                    <div class="checkbox mt-2">
                                                        <input type="checkbox" class="form-check-input"/>
                                                        <label for="remember-me-v " class="fw-bold">Save this option</label>
                                                    </div>
                                                </div>
                                                <div class="d-flex m-2">
                                                    <button type="submit" class="btn btn-primary me-1 mb-1">Create Match</button>
                                                    <a href="/" class="btn btn-light-secondary me-1 mb-1" >Reset</a>
                                                </div>
                                            </div>
                                                
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateMatch
