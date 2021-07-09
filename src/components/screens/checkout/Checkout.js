import React, { useState } from 'react'
import {
    Link,
  } from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import CheckoutTeam from '../../modals/checkout-team/CheckoutTeam';
import {FaCreditCard} from "@react-icons/all-files/fa/FaCreditCard";
import {HiOutlineMail} from "@react-icons/all-files/hi/HiOutlineMail";
import {GiBasketballBasket} from "@react-icons/all-files/gi/GiBasketballBasket";
import {GiBasketballJersey} from "@react-icons/all-files/gi/GiBasketballJersey";
import {RiCoupon3Line} from "@react-icons/all-files/ri/RiCoupon3Line";
import {FaRegCheckCircle} from "@react-icons/all-files/fa/FaRegCheckCircle";
import {AiFillQuestionCircle} from "@react-icons/all-files/ai/AiFillQuestionCircle";

import "./_checkout.scss";

const Checkout = () => {
    const [showCheckoutTeam, setCheckoutTeamShow] = useState(false);
  
    const handleCheckoutTeamClose = () => setCheckoutTeamShow(false);
    const handleCheckoutTeamShow = () => setCheckoutTeamShow(true);
    return (
        <>
        <CheckoutTeam show={showCheckoutTeam} handleCheckoutTeamClose={handleCheckoutTeamClose} />
        <div className="card text-center">
            <h6>Court Reservation </h6>
            <div className="row">
                <div className="col-8 m-auto mt-2">
                <ul class="progressbar">
                    <li class="d-flex active"><FaRegCheckCircle size={20}/><h6>Teams</h6></li>
                    <li class="d-flex active"><FaRegCheckCircle size={20}/><h6>Court</h6></li>
                    <li><AiFillQuestionCircle size={20} className="text-danger"/>Payment</li>
                </ul>
                </div>
                <div className="col-8 m-auto mt-2">
                    <div className="progress progress-success progress-sm">
                        <div className="progress-bar" role="progressbar" style={{ width: "70%" }} aria-valuenow="35" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div className="mt-4 mb-4">
                    <div className="border m-auto rounded text-center checkout-calendar">
                        <h6 className="bg-danger text-light p-2 rounded-top">06</h6>
                        <h6>Jan</h6>
                    </div>
                </div>
            </div>
        </div>
        <section class="list-group-navigation">
            <div class="row ">
                <div class="col-lg-12 checkout-steps">
                    <div class="card">
                        <div class="card-content">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-12 col-sm-12 col-md-4">
                                        <div class="list-group" role="tablist">
                                            <a class="list-group-item list-group-item-action text-center active" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-selected="false"><GiBasketballJersey/>Teams</a>
                                            <a class="list-group-item list-group-item-action text-center" id="list-court-list" data-bs-toggle="list" href="#list-court" role="tab" aria-selected="false"><GiBasketballBasket/>Court Details</a>
                                            <a class="list-group-item list-group-item-action text-center" id="list-messages-list" data-bs-toggle="list" href="#list-messages" role="tab" aria-selected="false"><HiOutlineMail/>Messages</a>
                                            <a class="list-group-item list-group-item-action text-center" id="list-coupon-list" data-bs-toggle="list" href="#list-coupon" role="tab" aria-selected="true"><RiCoupon3Line/>Coupons</a>
                                            <a class="list-group-item list-group-item-action text-center" id="list-payment-list" data-bs-toggle="list" href="#list-payment" role="tab" aria-selected="true"><FaCreditCard/>Payment</a>
                                        </div>
                                    </div>
                                    <div class="col-12 col-sm-12 col-md-8 mt-1 h-50">
                                        <div class="tab-content text-justifyx" id="nav-tabContent">
                                            <div class="tab-pane show active" id="list-court" role="tabpanel" aria-labelledby="list-court-list">
                                            <h6 className="text-center">Bornova Court</h6>
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

                                            <div class="tab-pane" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">
                                            
                                                <div className="col-12 mb-3 text-center">
                                                    <h6>Takımlar</h6>
                                                    <div className="">
                                                        <Link className="btn btn-light m-2 p-4 checkout-team border" onClick={handleCheckoutTeamShow}>
                                                            <h6>Team 1</h6>
                                                            <AvatarGroup max={3} >
                                                                <Avatar alt="Remy Sharp" src="assets/images/faces/2.jpg" />
                                                                <Avatar alt="Travis Howard" src="assets/images/faces/2.jpg" />
                                                                <Avatar alt="Cindy Baker" src="assets/images/faces/2.jpg" />
                                                                <Avatar alt="Agnes Walker" src="assets/images/faces/2.jpg" />
                                                                <Avatar alt="Trevor Henderson" src="assets/images/faces/2.jpg" />
                                                            </AvatarGroup>
                                                        </Link>
                                                        <Link className="btn btn-light m-2 p-4 checkout-team border" onClick={handleCheckoutTeamShow}>
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
                                            <div class="tab-pane" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">
                                                <div class="d-flex justify-content-center">
                                                    <h6 className="text-center mr-2">Messages</h6>
                                                    <Link className="ml-2" to="message-detail">Go to chat</Link>
                                                </div>
                                                <div class="card">
                                                    <div class="card-header">
                                                        <div class="media d-flex align-items-center">
                                                            <div class="avatar me-3">
                                                                <Link to="my-profile"><img src="assets/images/faces/1.jpg" alt="" srcset="" /></Link>
                                                                <span class="avatar-status bg-success"></span>
                                                            </div>
                                                            <div class="name flex-grow-1">
                                                                <h6 class="mb-0">Fred</h6>
                                                                <span class="text-xs">Online</span>
                                                            </div>
                                                                <button class="btn btn-sm">
                                                                    <i data-feather="x"></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div class="card-body pt-4 bg-grey">
                                                            <div class="chat-content">
                                                                <div class="chat">
                                                                    <div class="chat-body">
                                                                        <div class="chat-message">Hi Alfy, how can i help you?</div>
                                                                    </div>
                                                                </div>
                                                                <div class="chat chat-left">
                                                                    <div class="chat-body">
                                                                        <div class="chat-message">I'm looking for the best admin dashboard
                                                                            template</div>
                                                                        <div class="chat-message">With bootstrap certainly</div>
                                                                    </div>
                                                                </div>
                                                                <div class="chat">
                                                                <div class="chat-body">
                                                                    <div class="chat-message">I recommend you to use Mazer Dashboard</div>
                                                                </div>
                                                            </div>
                                                            <div class="chat chat-left">
                                                            <div class="chat-body">
                                                                <div class="chat-message">That"s great! I like it so much :)</div>
                                                            </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="tab-pane" id="list-coupon" role="tabpanel" aria-labelledby="list-coupon-list">
                                                <h6 className="text-center mr-2">Coupons</h6>
                                                <div class="table-responsive">
                                                    <table class="table table-hover table-lg">
                                                        <thead>
                                                            <tr>
                                                                <th className="m-auto text-center">Coupon id</th>
                                                                <th className="m-auto text-center">Amount</th>
                                                                <th className="m-auto text-center">Expiration</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className="coupon-table">
                                                            {
                                                                [...Array(5)].map((coupon) => (
                                                                <tr>
                                                                    <td class="col-3">
                                                                        <div class="d-flex align-items-center">
                                                                            <div class="avatar avatar-md">
                                                                                <img src="assets/images/faces/5.jpg" alt="checkout-coupon" />
                                                                            </div>
                                                                            <p class="font-bold ms-3 mb-0">Si Cantik</p>
                                                                        </div>
                                                                    </td>
                                                                    <td class="col-auto">
                                                                        <p class="m-auto text-center">50₺</p>
                                                                    </td>
                                                                    <td class="col-auto">
                                                                        <p class="m-auto text-center">25/06</p>
                                                                    </td>
                                                                </tr>
                                                                ))
                                                            }
                                                            
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div class="tab-pane" id="list-payment" role="tabpanel" aria-labelledby="list-payment-list">
                                                <h6 className="text-center mb-4">Payment</h6>
                                                <div className="d-flex mb-5 justify-content-evenly">
                                                    <div className="border rounded text-center p-2 bg-primary">
                                                        <h6 className="text-light">Reservation Price</h6>
                                                        <hr className="text-light" />
                                                        <h6 className="text-light">100 ₺</h6>
                                                    </div>
                                                    <div className="border rounded text-center p-2 bg-warning">
                                                        <h6 className="text-light">Pre-pay</h6>
                                                        <hr className="text-light"/>
                                                        <h6 className="text-light">25 ₺</h6>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-evenly">
                                                    <div className="col-lg-4 text-center">
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
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Checkout
