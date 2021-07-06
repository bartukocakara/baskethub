import React from 'react'
import FavPlayers from '../../../modals/request-court-reservation/fav-players/FavPlayers';
import FavTeams from '../../../modals/request-court-reservation/fav-teams/FavTeams';
import Courts from './courts/Courts';
import { FcMoneyTransfer } from "@react-icons/all-files/fc/FcMoneyTransfer";
import { FcCalendar } from "@react-icons/all-files/fc/FcCalendar";
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import "./_createMatch.scss";

const CreateMatch = () => {
    return (
        <div>
            <h5 className="text-center">Create Match</h5>
            <div class="col-md-12">

                            <div class="card">
                                <div class="card-header">
                                    <h4 class="card-title">Please select option</h4>
                                </div>
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-3">
                                            <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                                <a class="nav-link" id="v-pills-home-tab" data-bs-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="false">Call all fav players</a>
                                                <a class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Call all fav teams</a>
                                                <a class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Call by played matches</a>
                                                <a class="nav-link active" id="v-pills-settings-tab" data-bs-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="true">Create without option +</a>
                                            </div>
                                        </div>
                                        <div class="col-9">
                                            <div class="tab-content" id="v-pills-tabContent">
                                                <div class="tab-pane fade" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                                    <div class="form-check">
                                                        <div className="checkbox checkbox-shadow m-2">
                                                            <input type="checkbox" className="form-check-input m-2" id="checkbox1" />
                                                            <label for="checkbox1" className="m-1">You are sending match request to all of your favourite players!</label>

                                                        </div>
                                                    </div>
                                                </div>
                                               
                                                <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
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
                                                            <div class="col-4">
                                                                <div class="form-group text-center">
                                                                    <label for="first-name-icon">Pay Option - 1</label>
                                                                    <FcMoneyTransfer size={25} className="m-2" />
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
                                                                    <FcMoneyTransfer size={25} className="m-2" />
                                                                </div>
                                                                <select className="form-control m-1" name="" >
                                                                    <option>Seperate Payment</option>
                                                                    <option>Only by me</option>
                                                                </select>
                                                            </div>
                                                            <div class="col-4">
                                                                <div class="form-group text-center">
                                                                    <label for="first-name-icon" >Pay Option - 3</label>
                                                                    <FcMoneyTransfer size={25} className="m-2" />
                                                                </div>
                                                                <select className="form-control m-1" name="" >
                                                                    <option>Pre-paid</option>,
                                                                    <option>Pay at check-in</option>
                                                                </select>
                                                            </div>
                                                            <div class="col-6">
                                                                <div class="form-group text-center">
                                                                    <label for="first-name-icon" className="m-2">Date</label>
                                                                    <FcCalendar size={25} className="m-2" />
                                                                </div>
                                                                <input type="date" className="form-control m-2" />
                                                            </div>
                                                            <div class="col-3 mt-3">
                                                                <div class="form-group text-center">
                                                                    <label for="first-name-icon">Start</label>
                                                                </div>
                                                                <input type="time" className="form-control m-2" />
                                                            </div>
                                                            <div class="col-3 mt-3">
                                                                <div class="form-group text-center">
                                                                    <label for="first-name-icon">End</label>
                                                                </div>
                                                                <input type="time" className="form-control m-2" />
                                                            </div>
                                                            <div class="col-auto">
                                                                <div class="form-check">
                                                                    <div class="checkbox mt-2">
                                                                        <input type="checkbox" id="remember-me-v" class="form-check-input" checked="" />
                                                                        <label for="remember-me-v">Remember this option</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-12 d-flex justify-content-end">
                                                                <button type="submit" class="btn btn-primary me-1 mb-1">Submit</button>
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
            <div className="row">
                <div className="card col-md-6 m-auto">
                    <div className="card-body">
                        <h6 className="text-center">Call List</h6>
                        <ul className="nav nav-tabs create-match-player-list" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <a className="nav-link active" id="home-tab" data-bs-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Favourite Teams</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link" id="profile-tab" data-bs-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Favourite Players</a>
                            </li>
                        </ul>
                        <div className="tab-content player-list  m-2 border rounded" id="myTabContent">
                            <div className="tab-pane fade active show" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <div className="list-select m-2 row"  id="widget-todo-list">
                                {
                                            [...Array(5)].map((player) => (
                                                <FavTeams />
                                            ))
                                        }
                                        
                                </div>
                            </div>
                            <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
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
                    <div className="card col-md-6 m-auto">
                    <div className="card-body">
                        <h6 className="text-center">Court List</h6>
                        <div className=" border rounded">
                            <div >
                                <div className="court-list m-2 row"  id="widget-todo-list">
                                {
                                            [...Array(5)].map((player) => (
                                                <Courts />
                                            ))
                                        }
                                        
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
