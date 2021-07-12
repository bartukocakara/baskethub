import React from 'react'
import {
    Link
  } from "react-router-dom";
import MatchTeamList from '../match-team-list/MatchTeamList';
import { FiShare2 } from "@react-icons/all-files/fi/FiShare2";
import { TiSocialInstagram } from "@react-icons/all-files/ti/TiSocialInstagram";
import { TiSocialTwitter } from "@react-icons/all-files/ti/TiSocialTwitter";
import { TiSocialFacebook } from "@react-icons/all-files/ti/TiSocialFacebook";
import { AiOutlineWhatsApp } from "@react-icons/all-files/ai/AiOutlineWhatsApp";
import { GoPerson } from "@react-icons/all-files/go/GoPerson";
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail";
import { FcCalendar } from "@react-icons/all-files/fc/FcCalendar";
import { BsFillPeopleFill } from "@react-icons/all-files/bs/BsFillPeopleFill";
import { FcMoneyTransfer } from "@react-icons/all-files/fc/FcMoneyTransfer";
import { GiTrophyCup } from "@react-icons/all-files/gi/GiTrophyCup";

import "./_endedMatch.scss";

const EndedMatch = () => {
    
    return (
        <>
        
        <div className="row">
            <div className="d-flex p-2">
                <h5 className="m-auto m-2"><Link to="court-detail">Balçova Spor Salonu</Link><span className="badge bg-danger fw-badge">Ended match</span></h5>
                
                <div className="d-flex">
                <Link to="match-chat" className="p-2 btn btn-warning m-2">
                    <AiOutlineMail className="card-footer-icon" />
                </Link>
                <div class="dropdown">
                        <Link class="btn btn-primary p-2 m-2" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                            <FiShare2 className="card-footer-icon"  />
                        </Link>

                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <li><Link class="dropdown-item text-center">With Player <GoPerson /></Link></li>
                            <li><Link class="dropdown-item text-center">Whatsapp <AiOutlineWhatsApp /></Link></li>
                            <li><Link class="dropdown-item text-center">Facebook <TiSocialFacebook /></Link></li>
                            <li><Link class="dropdown-item text-center">Twitter <TiSocialTwitter /></Link></li>
                            <li><Link class="dropdown-item text-center">Instagram <TiSocialInstagram /></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-md-12">
                <div className="card">
                    <div class="card-body p-0 h-auto">
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
                <div class=" text-center p-2 row">
                    <h6 class="d-inline">Match Details </h6>
                        <span className="badge bg-success w-75  p-1 m-auto">
                            <GiTrophyCup size={25} className="text-light m-2"/>
                            Reward is : Match Payment
                        </span>
                        <div className="col-md-6 row mt-3">
                            <div className="col-md-3">
                            <FcCalendar size={30}/> 
                            </div>
                            <div className="col-md-9">
                            <span class="badge text-dark"> 21/06/2021 | 12:00 - 13:00</span>
                            </div>
                            <div className="col-md-3">
                            <BsFillPeopleFill size={30} className="text-success m-1"/>
                            </div>
                            <div className="col-md-9">
                                <label class=" p-2">
                                 Player Count : <span class="badge text-dark">8</span>
                                </label>
                            </div>
                            <div className="col-md-3">
                                <BsFillPeopleFill size={30} className="text-warning m-1"/>
                            </div>
                            <div className="col-md-9">
                                <label class=" p-2 w-100">
                                Player Need <span class="badge text-dark">1-3</span>
                                </label>
                            </div>
                            <div className="col-md-3 mt-2">
                                <img className=" w-100" src="assets/images/logo/basketball-court.svg" alt="court-field"/>
                            </div>
                            <div className="col-md-9">
                                <label class=" p-2 w-100">
                                Court field <span class="badge text-dark">Half Court</span>
                            </label>
                            </div>
                    </div>
                    <div className="col-md-6 row  mt-3">
                        <div className="col-md-12 ">
                            <label class="btn-light text-dark p-2 w-100">
                                <FcMoneyTransfer size={30}/>Ödeme Türü <span class="badge text-dark d-block">Credit Card</span>
                            </label>
                        </div>
                        <div className="col-md-12">
                            <label class="btn-light text-dark p-2 w-100">
                                Ödeme Dağılımı <span class="badge text-dark">Seperate Payment</span>
                            </label>
                        </div>
                        <div className="col-md-12">
                            <label class="btn-light text-dark p-2 w-100">
                                Ön ödeme durumu <span class="badge text-dark d-block">Pre-paid</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <MatchTeamList />
        </div>
        </>
    )
}

export default EndedMatch
