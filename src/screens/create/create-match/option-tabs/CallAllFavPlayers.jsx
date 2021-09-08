
import React, { useState } from 'react'
import { FcMoneyTransfer } from "@react-icons/all-files/fc/FcMoneyTransfer";
import { FcCalendar } from "@react-icons/all-files/fc/FcCalendar";
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';

import {
    Link,
  } from "react-router-dom";

import EditMatchEventPayment from './../../../../components/modals/edit-match-event-payment/EditMatchEventPayment';

const CallAllFavPlayers = () => {
    const [showEditPayment, setEditPayment] = useState(false);
  
    const handleEditPaymentClose = () => setEditPayment(false);
    const handleEditPaymentShow = () => setEditPayment(true);
    return (
        <>
        <EditMatchEventPayment handleEditPaymentClose={handleEditPaymentClose} show={showEditPayment}  />

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
            <div className="col-md-12 mt-5 p-2 text-center">
                <button class="btn btn-lg bg-success text-light">Create Match Event</button>
            </div>
        </div>
        </>
    )
}

export default CallAllFavPlayers
