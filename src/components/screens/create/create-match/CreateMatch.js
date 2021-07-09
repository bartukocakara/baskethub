import React from 'react'
import FavPlayers from '../../../modals/request-court-reservation/fav-players/FavPlayers';
import FavTeams from '../../../modals/request-court-reservation/fav-teams/FavTeams';
import Courts from './courts/Courts';
import { FcMoneyTransfer } from "@react-icons/all-files/fc/FcMoneyTransfer";
import { FcCalendar } from "@react-icons/all-files/fc/FcCalendar";
import { RiUserStarLine } from "@react-icons/all-files/ri/RiUserStarLine";
import { BsPeopleFill } from "@react-icons/all-files/bs/BsPeopleFill";
import { AiFillStar } from "@react-icons/all-files/ai/AiFillStar";
import { AiTwotoneAppstore } from "@react-icons/all-files/ai/AiTwotoneAppstore";
import { GoLocation } from "@react-icons/all-files/go/GoLocation";
import { GiPayMoney } from "@react-icons/all-files/gi/GiPayMoney";
import { GiTakeMyMoney } from "@react-icons/all-files/gi/GiTakeMyMoney";
import { FcInfo } from "@react-icons/all-files/fc/FcInfo";
import { GiBugleCall } from "@react-icons/all-files/gi/GiBugleCall";

import {
    Link,
  } from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import "./_createMatch.scss";

const CreateMatch = () => {
    return (
        <div>
            <h5 className="text-center">Create Match</h5>
            <div class="col-md-12">

                            <div class="card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-3">
                                            <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                                <a class="nav-link" id="v-pills-team-tab" data-bs-toggle="pill" href="#v-pills-team" role="tab" aria-controls="v-pills-team" aria-selected="false">Call all fav players <RiUserStarLine/></a>
                                                <a class="nav-link" id="v-pills-player-tab" data-bs-toggle="pill" href="#v-pills-player" role="tab" aria-controls="v-pills-player" aria-selected="false">Call all fav teams <BsPeopleFill /> <AiFillStar size={10}/></a>
                                                <a class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Call by played matches <AiTwotoneAppstore/></a>
                                                <a class="nav-link active" id="v-pills-settings-tab" data-bs-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="true">Create without option +</a>
                                            </div>
                                        </div>
                                        <div class="col-9">
                                            <div class="tab-content" id="v-pills-tabContent">
                                                <div class="tab-pane fade" id="v-pills-team" role="tabpanel" aria-labelledby="v-pills-team-tab">
                                                    <div class="form-check">
                                                        <div className="checkbox checkbox-shadow m-2">
                                                            <input type="checkbox" className="form-check-input m-2" id="checkbox1" />
                                                            <label for="checkbox1" className="m-1">You are sending match request to all of your favourite players!</label>

                                                        </div>
                                                    </div>
                                                </div>
                                               
                                                <div class="tab-pane fade" id="v-pills-player" role="tabpanel" aria-labelledby="v-pills-player-tab">
                                                    <div class="form-check">
                                                        <div className="checkbox checkbox-shadow m-2">
                                                            <input type="checkbox" className="form-check-input m-2" id="checkbox1" />
                                                            <label for="checkbox1" className="m-1">You are sending match request to all of your favourite teams!</label>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                                                    <div className="row p-4">
                                                        {
                                                            [...Array(5)].map((matchTeam) => (
                                                            <div className="d-flex p-2 col-md-4 ml-1 border rounded craete-match-card">
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
                                                            ))
                                                        }
                                                        
                                                    </div>
                                                </div>
                                                <div class="tab-pane fade active show" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                                                    <form class="">
                                                        <div class="row">
                                                            <div className="col-12">
                                                                <div className="form-group w-50 m-auto pb-3 text-center">
                                                                    <label className="w-50 fw-bold text-primary">Give this match a name:</label>
                                                                    <input className="form-control" placeholder="Write name..." />
                                                                </div>
                                                            </div>
                                                            <hr className="m-3 border border-light" />

                                                            <FcMoneyTransfer className="col-md-12" size={50}/>

                                                            <div class="col-4">
                                                                <div class="form-group text-center">
                                                                    <label for="first-name-icon">Pay Option - 1</label>
                                                                </div>
                                                                <select className="form-control m-1" name="" >
                                                                    <option>Bank Card</option>
                                                                    <option>Credit Card</option>
                                                                    <option>Sipay</option>
                                                                </select>
                                                            </div>
                                                            <div class="col-4">
                                                                <div class="form-group text-center">
                                                                    <label for="first-name-icon" >Pay Option - 2</label>
                                                                </div>
                                                                <select className="form-control m-1" name="" >
                                                                    <option>Seperate Payment</option>
                                                                    <option>Only by me</option>
                                                                </select>
                                                            </div>
                                                            <div class="col-4">
                                                                <div class="form-group text-center">
                                                                    <label for="first-name-icon" >Pay Option - 3</label>
                                                                </div>
                                                                <select className="form-control m-1" name="" >
                                                                    <option>Pre-paid</option>,
                                                                    <option>Pay at check-in</option>
                                                                </select>
                                                            </div>
                                                            <hr className="m-3 border border-light" />
                                                            <FcCalendar className="col-md-12" size={50}/>
                                                            <div className="col-6">
                                                                <div className="form-group text-center">
                                                                    <label for="first-name-icon" className="m-2">Date</label>
                                                                </div>
                                                                <input type="date" className="form-control m-2" />
                                                            </div>
                                                            <div className="col-3 mt-3">
                                                                <div class="form-group text-center">
                                                                    <label for="first-name-icon">Start</label>
                                                                </div>
                                                                <input type="time" className="form-control m-2" />
                                                            </div>
                                                            <div className="col-3 mt-3">
                                                                <div className="form-group text-center">
                                                                    <label for="first-name-icon">End</label>
                                                                </div>
                                                                <input type="time" className="form-control m-2" />
                                                            </div>
                                                            <hr className="m-3 border border-light" />
                                                            <div className="col-md-12 text-center">
                                                                <img className="court-field margin-auto" src="assets/images/logo/basketball-court.svg" alt="court-field"/>
                                                            </div>
                                                            <div className="col-md-6 m-auto text-center mt-3 mb-3">
                                                                <div className="d-flex m-2">
                                                                <h6 className=" m-2">Field use</h6><FcInfo size={25}/>
                                                                </div>
                                                                <select className="form-control fw-bold">
                                                                    <option>Full Court</option>
                                                                    <option>Half Court</option>
                                                                </select>
                                                            </div>
                                                            <hr className="m-3 border border-light" />
                                                            <GiBugleCall size={50} className="text-primary" />
                                                            <div className="col-md-12 m-auto">
                                                                <div className="card-body">
                                                                    <h6 className="text-center">Call List</h6>
                                                                    <ul className="nav nav-tabs create-match-player-list" id="myTab" role="tablist">
                                                                        <li className="nav-item" role="presentation">
                                                                            <a className="nav-link active" id="team-tab" data-bs-toggle="tab" href="#team" role="tab" aria-controls="team" aria-selected="true">Favourite Teams</a>
                                                                        </li>
                                                                        <li className="nav-item" role="presentation">
                                                                            <a className="nav-link" id="player-tab" data-bs-toggle="tab" href="#player" role="tab" aria-controls="player" aria-selected="false">Favourite Players</a>
                                                                        </li>
                                                                    </ul>
                                                                    <div className="tab-content player-list  m-2 border rounded" id="myTabContent">
                                                                        <div className="tab-pane fade active show" id="team" role="tabpanel" aria-labelledby="team-tab">
                                                                            <div className="list-select m-2 row"  id="widget-todo-list">
                                                                            {
                                                                                        [...Array(5)].map((player) => (
                                                                                            <FavTeams />
                                                                                        ))
                                                                                    }
                                                                                    
                                                                            </div>
                                                                        </div>
                                                                        <div className="tab-pane fade" id="player" role="tabpanel" aria-labelledby="player-tab">
                                                                            <div className="list-select m-2 row" id="widget-todo-list">
                                                                                    
                                                                                    {
                                                                                        [...Array(5)].map((player) => (
                                                                                        <>
                                                                                        <FavPlayers />
                                                                                        
                                                                                        </>
                                                                                        ))
                                                                                    }
                                                                                    
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className=" m-auto border">
                                                                <div className="card-body text-center">
                                                                    <h6>Court Search</h6>
                                                                    <div className="header form">
                                                                        <form className="row">
                                                                            <div className="col-md-4 text-center">
                                                                                <GoLocation size={20} className="m-2 text-primary"/>
                                                                                <select className="form-control">
                                                                                    <option>İzmir</option>
                                                                                    <option>İstanbul</option>
                                                                                    <option>Ankara</option>
                                                                                </select>
                                                                            </div>
                                                                            <div className="col-md-4  text-center">
                                                                                <GiPayMoney size={20} className="m-2 text-primary"/>
                                                                                <select className="form-control">
                                                                                    <option>75-100 ₺</option>
                                                                                    <option>100-125 ₺</option>
                                                                                    <option>125-150 ₺</option>
                                                                                </select>
                                                                            </div>
                                                                            <div className="col-md-4  text-center">
                                                                                <AiFillStar className="m-2 text-primary"/>
                                                                                <div class="dropdown dropdown-color-icon">
                                                                                    <button class="btn border rounded btn-lg dropdown-toggle show" type="button" id="dropdownMenuButtonEmoji" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                                                                        <span class="me-50"></span>Rating
                                                                                    </button>
                                                                                    <div class="dropdown-menu show" aria-labelledby="dropdownMenuButtonEmoji" style={{ margin: "0px", position: "absolute", inset: "0px auto auto 0px", transform: "translate(0px, 38.4px)" }} data-popper-placement="bottom-start">
                                                                                        <Link class="dropdown-item"><span class="dropdown-item-emoji">{ [...Array(1)].map((star) => (<AiFillStar/>))}</span>
                                                                                            </Link>
                                                                                        <Link class="dropdown-item"><span class="dropdown-item-emoji">{ [...Array(2)].map((star) => (<AiFillStar/>))}</span>
                                                                                            </Link>
                                                                                        <Link class="dropdown-item"><span class="dropdown-item-emoji">{ [...Array(3)].map((star) => (<AiFillStar/>))}</span>
                                                                                            </Link>
                                                                                        <Link class="dropdown-item"><span class="dropdown-item-emoji">{ [...Array(4)].map((star) => (<AiFillStar/>))}</span>
                                                                                             </Link>
                                                                                        <Link class="dropdown-item"><span class="dropdown-item-emoji">{ [...Array(5)].map((star) => (<AiFillStar/>))}</span>
                                                                                            </Link>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </form>
                                                                    </div>
                                                                    <div className="list-select m-2 row border rounded"  id="widget-todo-list">
                                                                        {
                                                                            [...Array(5)].map((player) => (
                                                                                <Courts />
                                                                            ))
                                                                        }
                                                                    </div>
                                                                    </div>
                                                                </div>
                                                            <div class="col-12 mt-3">
                                                                <div class="form-group text-center">
                                                                    <label className="w-50 fw-bold text-primary">You can write some note for this event:</label>
                                                                </div>
                                                                <textarea className="form-control" rows="3" placeholder="Write something..."></textarea>
                                                            </div>
                                                            <div class="col-12 mt-3 text-center">

                                                                <div class="dropdown dropdown-color-icon">
                                                                    <button class="btn btn-primary btn-lg dropdown-toggle show" type="button" id="dropdownMenuButtonEmoji" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                                                        <span class="me-50"><GiTakeMyMoney/></span>Reward Options
                                                                    </button>
                                                                    <div class="dropdown-menu show" aria-labelledby="dropdownMenuButtonEmoji" style={{ margin: "0px", position: "absolute", inset: "0px auto auto 0px", transform: "translate(0px, 38.4px)" }} data-popper-placement="bottom-start">
                                                                        <Link class="dropdown-item"><span class="dropdown-item-emoji">😆</span>
                                                                            Baklava
                                                                            1</Link>
                                                                        <Link class="dropdown-item"><span class="dropdown-item-emoji">😎</span>
                                                                            Saha ücreti
                                                                            2 </Link>
                                                                        <Link class="dropdown-item"><span class="dropdown-item-emoji">🤩</span>
                                                                            Option
                                                                            3</Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-auto">
                                                                <div class="form-check">
                                                                    <div class="checkbox mt-2">
                                                                        <input type="checkbox" id="remember-me-v" class="form-check-input" checked="" />
                                                                        <label for="remember-me-v">Remember this option</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="btn-group mb-1">
                                                            
                                                            </div>
                                                                <div class="col-12 d-flex justify-content-end">
                                                                    <button type="submit" class="btn btn-primary me-1 mb-1">Create Match</button>
                                                                    <button type="reset" class="btn btn-light-secondary me-1 mb-1">Reset</button>
                                                                </div>
                                                            </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
            
        </div>
    )
}

export default CreateMatch
