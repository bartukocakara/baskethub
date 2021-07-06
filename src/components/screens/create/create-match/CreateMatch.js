import React from 'react'
import FavPlayers from '../../../modals/request-court-reservation/fav-players/FavPlayers';
import FavTeams from '../../../modals/request-court-reservation/fav-teams/FavTeams';
import Courts from './courts/Courts';
import { FcMoneyTransfer } from "@react-icons/all-files/fc/FcMoneyTransfer";
import { FcCalendar } from "@react-icons/all-files/fc/FcCalendar";

import "./_createMatch.scss";

const CreateMatch = () => {
    return (
        <div>
            <h6>Create Match</h6>
            <div className="row">
            <div class="col-md-12">
                <div class="card">
                        <div class="card-body w-50 m-auto">
                            <form class="">
                                    <div class="row">
                                        <div class="col-12">
                                            <div class="form-group text-center">
                                                <label for="first-name-icon" className="mb-2">Payment Type</label>
                                                <FcMoneyTransfer size={25} className="m-2" />
                                            </div>
                                            <select className="form-control m-1" name="" >
                                                <option>Bank Card</option>
                                                <option>Credit Card</option>
                                                <option>Sipay</option>
                                            </select>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-group text-center">
                                                <label for="first-name-icon" className="m-2">Payment Options</label>
                                                <FcMoneyTransfer size={25} className="m-2" />
                                            </div>
                                            <select className="form-control m-1" name="" >
                                                <option>Seperate Payment</option>
                                                <option>Only by me</option>
                                                <option>Pre-paid</option>
                                            </select>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-group text-center">
                                                <label for="first-name-icon" className="m-2">Date</label>
                                                <FcCalendar size={25} className="m-2" />
                                            </div>
                                            <input type="date" className="form-control m-2" />
                                        </div>
                                        <div class="col-6">
                                            <div class="form-group text-center">
                                                <label for="first-name-icon">Start</label>
                                            </div>
                                            <input type="time" className="form-control m-2" />
                                        </div>
                                        <div class="col-6">
                                            <div class="form-group text-center">
                                                <label for="first-name-icon">End</label>
                                            </div>
                                            <input type="time" className="form-control m-2" />
                                        </div>
                                        <div class="col-12">
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
