import React from 'react'
import {
    Link
  } from "react-router-dom";
import { AiFillEye } from "@react-icons/all-files/ai/AiFillEye";
import { BiCheckDouble } from "@react-icons/all-files/bi/BiCheckDouble";
import { HiCheck } from "@react-icons/all-files/hi/HiCheck";
import { GoLocation } from "@react-icons/all-files/go/GoLocation";
import { FiShare2 } from "@react-icons/all-files/fi/FiShare2";
import { TiSocialInstagram } from "@react-icons/all-files/ti/TiSocialInstagram";
import { TiSocialTwitter } from "@react-icons/all-files/ti/TiSocialTwitter";
import { TiSocialFacebook } from "@react-icons/all-files/ti/TiSocialFacebook";
import { AiOutlineWhatsApp } from "@react-icons/all-files/ai/AiOutlineWhatsApp";
import { GoPerson } from "@react-icons/all-files/go/GoPerson";
import "./_courtDetail.scss";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

const FavCourtDetail = () => {
    return (
        <>
        <div className="d-flex court-detail-header-text">
            <div className="d-flex m-auto">
                <h5>Dr. Cavit Spor Salonu</h5>
                <GoLocation />
                <p class="font-bold">İzmir</p>
            </div>
            <div className="buttons text-center d-flex">
                <Link to="message-detail" className="btn btn-warning message">
                    <i className='bi bi-envelope bi-sub fs-4 text-light-600'></i>
                </Link>
                <div class="dropdown">
                    <Link className="btn btn-primary share-button" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                    <FiShare2 />
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
        
            <div className="col-6">
                <div className="card">
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
                        <div class="card-body text-center p-2">
                            <h4 class="card-title text-center ">Court Details</h4>
                            <hr />
                            <div class="card-body px-0 py-1">
                                    <table class="table table-borderless">
                                        <tbody><tr>
                                            <td class="col-3">Hygiene:</td>
                                                <td class="col-6">
                                                    <div class="progress progress-info">
                                                        <div class="progress-bar" role="progressbar" style={{ width: "60%" }} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </td>
                                            <td class="col-3 text-center">60%</td>
                                            </tr>
                                            <tr>
                                                <td class="col-3">Response:</td>
                                                    <td class="col-6">
                                                        <div class="progress progress-success">
                                                            <div class="progress-bar" role="progressbar" style={{ width: "35%" }} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </td>
                                                <td class="col-3 text-center">30%</td>
                                            </tr>
                                            <tr>
                                                <td class="col-3">Intensity:</td>
                                                    <td class="col-6">
                                                        <div class="progress progress-danger">
                                                            <div class="progress-bar" role="progressbar" style={{ width: "50%" }} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </td>
                                                <td class="col-3 text-center">50%</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <h6>2.323 Players Voted</h6>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12">
                <div class="card">
                    <div class="card-body py-4 px-5">
                        <div class="d-flex row">
                            <div class="avatar avatar-xl col-md-1">
                                <img src="assets/images/faces/1.jpg" alt="Face 1" />
                            </div>
                            <div class="col-md-2 name text-center">
                                <h5 class="font-bold">John Duck</h5>
                                <h6 class="text-muted mb-0">@johnducky</h6>
                            </div>
                            <div class="col-md-3 name text-center">
                                <h5 class="font-bold">Email</h5>
                                <h6 class="text-muted mb-0">bartuu_436@hotmail.com</h6>
                            </div>
                            <div class="col-md-2 name text-center">
                                <h5 class="font-bold">Phone</h5>
                                <h6 class="text-muted mb-0">+90 555 667 66 80</h6>
                            </div>
                            <div class="col-md-3 name text-center">
                                <h5 class="font-bold">Address</h5>
                                <h6 class="text-muted mb-0">Caferağa, Sakız Gülü Sk. No:11 D:No:1, 34710 Kadıköy/İstanbul</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-6 col-lg-3 col-md-6">
                <div className="card">
                    <div className="card-body px-3 py-4-5 profile-widget">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="stats-icon purple">
                                    <AiFillEye style={{ color:"#fff", fontSize:"30px", }}/>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <h6 className="text-muted font-semibold">Court Views</h6>
                                <h6 className="font-extrabold mb-0">112.000</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-6 col-lg-3 col-md-6">
                <div className="card">
                    <div className="card-body px-3 py-4-5 profile-widget">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="stats-icon blue">
                                <AiFillEye style={{ color:"#fff", fontSize:"30px", }}/>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <h6 className="text-muted font-semibold">Likes</h6>
                                <h6 className="font-extrabold mb-0">183.000</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-6 col-lg-3 col-md-6">
                <div className="card">
                    <div className="card-body px-3 py-4-5 profile-widget">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="stats-icon green">
                                <BiCheckDouble style={{ color:"#fff", fontSize:"30px" }}/>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <h6 className="text-muted font-semibold">Matches Played</h6>
                                <h6 className="font-extrabold mb-0">80.000</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-6 col-lg-3 col-md-6">
                <div className="card">
                    <div className="card-body px-3 py-4-5 profile-widget">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="stats-icon green">
                                <HiCheck style={{ color:"#fff", fontSize:"30px", }}/>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <h6 className="text-muted font-semibold">Matches Created</h6>
                                <h6 className="font-extrabold mb-0">112</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div classNames="col-12">
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
                        <div class="col-md-12">
                        <FullCalendar
                            plugins={[ dayGridPlugin ]}
                            initialView="dayGridMonth"
                        />
                           
                        </div>
                        </div>
                        <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                        {
                            [...Array(5)].map((teamDetail) => (
                                <>
                                    <div className="media fav-court-detail-comment d-flex align-items-center">
                                        <div className="avatar me-3">
                                            <img src="assets/images/faces/1.jpg" alt="" srcset="" />
                                            <span className="avatar-status bg-success"></span>
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
        </>
    )
}

export default FavCourtDetail
