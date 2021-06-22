import React from 'react'
import {
    Link
  } from "react-router-dom";
import {BiShareAlt} from "@react-icons/all-files/bi/BiShareAlt";
import { AiFillEye } from "@react-icons/all-files/ai/AiFillEye";
import { BiCheckDouble } from "@react-icons/all-files/bi/BiCheckDouble";
import { HiCheck } from "@react-icons/all-files/hi/HiCheck";
import { GoLocation } from "@react-icons/all-files/go/GoLocation";

import "./_favCourtDetail.scss";

const FavCourtDetail = () => {
    return (
        <>
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
                            <div className="d-flex court-detail-header-text">
                                <h5>Dr. Cavit Spor Salonu</h5>
                                <div>
                                    <GoLocation />
                                    <p class="font-bold">İzmir</p>
                                </div>
                            </div>
                            <div className="buttons text-center">
                                <Link to="team-message-detail" className="btn btn-light message">
                                    <i className='bi bi-envelope bi-sub fs-4 text-gray-600'></i>
                                </Link>
                                <button className="btn btn-light share"><BiShareAlt size={100}/></button>
                            </div>
                            <br />
                            <h4 class="card-title text-center">Court Details</h4>
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
                                    </tbody></table>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12">
                <div class="card">
                    <div class="card-body py-4 px-5">
                        <div class="d-flex align-items-center">
                            <div class="avatar avatar-xl">
                                <img src="assets/images/faces/1.jpg" alt="Face 1" />
                            </div>
                            <div class="ms-3 name">
                                <h5 class="font-bold">John Duck</h5>
                                <h6 class="text-muted mb-0">@johnducky</h6>
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
                                <h6 className="text-muted font-semibold">Profile Views</h6>
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
                                <h6 className="text-muted font-semibold">Followers</h6>
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
                                <h6 className="text-muted font-semibold">Match Joined</h6>
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
                                <h6 className="text-muted font-semibold">Match Accepted</h6>
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

                            <div class="card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-3">
                                            <div class="nav flex-column nav-pills border rounded" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                                {/* <select className="form-control">
                                                    <option>--Select Month--</option>
                                                    <option>January</option>
                                                    <option>February</option>
                                                    <option>March</option>
                                                    <option>April</option>
                                                    <option>May</option>
                                                    <option>June</option>
                                                    <option>July</option>
                                                </select> */}
                                                <a class="nav-link" id="v-pills-january-tab" data-bs-toggle="pill" href="#v-pills-january" role="tab" aria-controls="v-pills-january" aria-selected="false">January</a>
                                                <a class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">February</a>
                                                <a class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">March</a>
                                                <a class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="true">April</a>
                                                <a class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="true">May</a>
                                                <a class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="true">June</a>
                                                <a class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="true">July</a>
                                                <a class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="true">August</a>
                                                <a class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="true">September</a>
                                                <a class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="true">October</a>
                                                <a class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="true">November</a>
                                                <a class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="true">December</a>
                                            </div>
                                        </div>
                                        <div class="col-9">
                                            <div class="tab-content" id="v-pills-tabContent">
                                                <div class="tab-pane fade" id="v-pills-january" role="tabpanel" aria-labelledby="v-pills-january-tab">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut
                                                    nulla neque.
                                                    Ut hendrerit nulla a euismod pretium.
                                                    Fusce venenatis sagittis ex efficitur suscipit. In tempor mattis
                                                    fringilla. Sed
                                                    id tincidunt orci, et volutpat ligula.
                                                    Aliquam sollicitudin sagittis ex, a rhoncus nisl feugiat quis. Lorem
                                                    ipsum dolor
                                                    sit amet, consectetur adipiscing elit.
                                                    Nunc ultricies ligula a tempor vulputate. Suspendisse pretium mollis
                                                    ultrices
                                                </div>
                                                <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                                                    Integer interdum diam eleifend metus lacinia, quis gravida eros
                                                    mollis. Fusce
                                                    non sapien sit amet magna dapibus
                                                    ultrices. Morbi tincidunt magna ex, eget faucibus sapien bibendum
                                                    non. Duis a
                                                    mauris ex. Ut finibus risus sed massa
                                                    mattis porta. Aliquam sagittis massa et purus efficitur ultricies.
                                                </div>
                                                <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                                                    Integer pretium dolor at sapien laoreet ultricies. Fusce congue et
                                                    lorem id
                                                    convallis. Nulla volutpat tellus nec
                                                    molestie finibus. In nec odio tincidunt eros finibus ullamcorper. Ut
                                                    sodales,
                                                    dui nec posuere finibus, nisl sem aliquam
                                                    metus, eu accumsan lacus felis at odio.
                                                </div>
                                                <div class="tab-pane fade active show" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                                                    Sed lacus quam, convallis quis condimentum ut, accumsan congue
                                                    massa.
                                                    Pellentesque et quam vel massa pretium ullamcorper
                                                    vitae eu tortor.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
