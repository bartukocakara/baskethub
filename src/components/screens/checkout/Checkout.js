import React, { useState } from 'react'
import {
    Link,
  } from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import "./_checkout.scss";
import CheckoutTeam from '../../modals/checkout-team/CheckoutTeam';

const Checkout = () => {
    const [showCheckoutTeam, setCheckoutTeamShow] = useState(false);
  
    const handleCheckoutTeamClose = () => setCheckoutTeamShow(false);
    const handleCheckoutTeamShow = () => setCheckoutTeamShow(true);
    return (
        <>
        <CheckoutTeam show={showCheckoutTeam} handleCheckoutTeamClose={handleCheckoutTeamClose} />
        <div className="card">
            <h6>Court Reservation / Complete Payment Page </h6>
            <div className="row">
                <div className="col-12 mt-2">
                    <div className="progress progress-success progress-sm">
                        <div className="progress-bar" role="progressbar" style={{ width: "35%" }} aria-valuenow="35" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div className="row col-12 mt-2 mb-2">
                    <div className="col-6 mb-3 text-center">
                        <h6>Bornova Court</h6>
                        <div id="carouselExampleCaptions" className="carousel slide m-auto" style={{ height:"200px", width:"400px" }} data-bs-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"></li>
                                <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" className=""></li>
                                <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item carousel-item-next carousel-item-start">
                                    <img src="assets/images/samples/basket-salon1.jpg" className="d-block w-100" style={{ height:"200px" }} alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                    </div>
                                </div>
                                <div className="carousel-item active carousel-item-start">
                                    <img src="assets/images/samples/basket-salon2.jpg" className="d-block w-100" style={{ height:"200px" }} alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                    </div>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-5 m-4 text-center">
                        <h6>Takımlar</h6>
                        <div className="btn-group m-2">
                            <Link className="btn btn-light m-2 p-4 checkout-team" onClick={handleCheckoutTeamShow}>
                                <h6>Team 1</h6>
                                <AvatarGroup max={3} >
                                    <Avatar alt="Remy Sharp" src="assets/images/faces/2.jpg" />
                                    <Avatar alt="Travis Howard" src="assets/images/faces/2.jpg" />
                                    <Avatar alt="Cindy Baker" src="assets/images/faces/2.jpg" />
                                    <Avatar alt="Agnes Walker" src="assets/images/faces/2.jpg" />
                                    <Avatar alt="Trevor Henderson" src="assets/images/faces/2.jpg" />
                                </AvatarGroup>
                            </Link>
                            <Link className="btn btn-light m-2 p-4 checkout-team" onClick={handleCheckoutTeamShow}>
                                <h6>Team 1</h6>
                                <AvatarGroup max={3} >
                                    <Avatar alt="Remy Sharp" src="assets/images/faces/2.jpg" />
                                    <Avatar alt="Travis Howard" src="assets/images/faces/2.jpg" />
                                    <Avatar alt="Cindy Baker" src="assets/images/faces/2.jpg" />
                                    <Avatar alt="Agnes Walker" src="assets/images/faces/2.jpg" />
                                    <Avatar alt="Trevor Henderson" src="assets/images/faces/2.jpg" />
                                </AvatarGroup>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12 row mt-5">
                    <div className="col-lg-2">
                        <div className="border w-50 rounded text-center">
                            <h6 className="bg-danger text-light p-2 rounded-top">06</h6>
                            <h6>Jan</h6>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="border rounded text-center">
                            <h6>Reservation Price</h6>
                            <hr />
                            <h6>25 ₺</h6>
                        </div>
                    </div>
                    <div className="col-lg-4 mt-2 text-center">
                        <h6>Ödeme Türü</h6>
                        <select className="form-control">
                            <option>Credit Card</option>
                            <option>Debit Card</option>
                            <option>Sipay</option>
                        </select>
                    </div>
                    <div className="col-lg-3 m-4 text-center">
                        <button className="btn btn-success">Complete Reservation</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Checkout
