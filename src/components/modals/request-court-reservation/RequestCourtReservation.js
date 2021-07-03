import React from 'react'
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { BsPencilSquare } from "@react-icons/all-files/bs/BsPencilSquare";
import { GoCreditCard } from "@react-icons/all-files/go/GoCreditCard";

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import {
    Link,
  } from "react-router-dom";
import "./_requestCourtReservation.scss";
import FavPlayers from './fav-players/FavPlayers';
import FavTeams from './fav-teams/FavTeams';

const RequestCourtReservation = ({handleRequestCourtReservationModalClose, show}) => {
    return (
        <Modal
            show={show}
            onHide={handleRequestCourtReservationModalClose}
            backdrop="static"
            keyboard={false}
            >
            <Modal.Header className="court-res-header">
                <Modal.Title className="d-flex">
                <div className="avatar me-3">
                    <img src="assets/images/faces/1.jpg" alt="" srcset="" />
                </div>
                <h6 className="m-auto">Court Owner</h6>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <div className="card-body">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <a className="nav-link active" id="home-tab" data-bs-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Favourite Teams</a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a className="nav-link" id="profile-tab" data-bs-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Favourite Players</a>
                    </li>
                </ul>
                <div className="tab-content m-2 border rounded" id="myTabContent">
                    <div className="tab-pane fade active show" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <div className="widget-todo-list-wrapper m-2 row"  id="widget-todo-list">
                        {
                                    [...Array(5)].map((player) => (
                                        <FavTeams />
                                    ))
                                }
                                
                        </div>
                    </div>
                    <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <div className="widget-todo-list-wrapper m-2 row" id="widget-todo-list">
                                
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
                <hr />
                <FullCalendar
                    plugins={[ dayGridPlugin ]}
                    initialView="dayGridMonth"
                    height="50vh"
                />
                <div clasName="form-group m-4">
                    <div className="d-flex">
                        <h6 className="text-center m-4">You can send note to court owner</h6><BsPencilSquare className="mt-4" size={25}/>
                    </div>
                    <textarea className="form-control" rows="5" placeholder="Write something"></textarea>
                </div>
                <div clasName="form-group m-4">
                    <div className="d-flex">
                    <h6 className="text-center m-4">Select Payment Type</h6><GoCreditCard className="mt-4" size={25}/>
                    </div>
                    <select className="form-control">
                        <option style={{ fontWeight:"bold", color:"#25396f" }}>Sipay</option>
                        <option style={{ fontWeight:"bold", color:"#25396f" }}>Debit Card</option>
                        <option style={{ fontWeight:"bold", color:"#25396f" }}>Credit Card</option>
                    </select>
                </div>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="danger" onClick={handleRequestCourtReservationModalClose}>
                Close
            </Button>
            <Link to="checkout" variant="primary">Send Join Request</Link>
            </Modal.Footer>
        </Modal>
    )
}

export default RequestCourtReservation
