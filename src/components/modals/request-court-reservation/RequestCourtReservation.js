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
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail";

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
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade active show row" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <ul className="widget-todo-list-wrapper m-2 row"  id="widget-todo-list">
                            {
                                [...Array(5)].map((player) => (
                                <>
                                <li className="widget-todo-item p-2 col-12">
                                    <div className="d-flex mb-1">
                                        <div className="d-flex align-items-center w-75">
                                            <i data-feather="list" className="cursor-move"></i>
                                            <div className="checkbox checkbox-shadow m-2">
                                                <input type="checkbox" className="form-check-input" id="checkbox1" />
                                            </div>
                                            <h6 className="m-2">Bornova Team</h6>
                                        </div>
                                        <div className="widget-todo-item-action d-flex align-items-center">
                                            <AvatarGroup max={3} className="m-2" >
                                                <Avatar alt="Remy Sharp" src="assets/images/faces/2.jpg" />
                                                <Avatar alt="Travis Howard" src="assets/images/faces/2.jpg" />
                                                <Avatar alt="Cindy Baker" src="assets/images/faces/2.jpg" />
                                                <Avatar alt="Agnes Walker" src="assets/images/faces/2.jpg" />
                                                <Avatar alt="Trevor Henderson" src="assets/images/faces/2.jpg" />
                                            </AvatarGroup>
                                            <Link to="team-chat" className="m-2">
                                                <AiOutlineMail size={25} />
                                            </Link>
                                        </div>
                                    </div>
                                </li>
                                <hr />
                                </>
                                ))
                            }
                            
                        </ul>
                    </div>
                    <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                    <ul className="widget-todo-list-wrapper m-2 row" id="widget-todo-list">
                            {
                                [...Array(5)].map((player) => (
                                <li className="widget-todo-item p-2 col-6">
                                    <div className="d-flex mb-1">
                                        <div className="d-flex align-items-center w-75">
                                            <i data-feather="list" className="cursor-move"></i>
                                            <div className="checkbox checkbox-shadow m-2">
                                                <input type="checkbox" className="form-check-input" id="checkbox1" />
                                            </div>
                                            <p>Ata Aksoy</p>
                                        </div>
                                        <div className="widget-todo-item-action d-flex align-items-center">
                                            <div className="badge badge-pill badge-light-success me-1">frontend
                                            </div>
                                            <div className="avatar bg-warning">
                                                <img src="assets/images/faces/1.jpg" alt="" srcset="" />
                                            </div>
                                            <i className="bx bx-dots-vertical-rounded font-medium-3 cursor-pointer"></i>
                                        </div>
                                    </div>
                                </li>
                                ))
                            }
                            
                        </ul>
                    </div>
                    </div>
                </div>
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
