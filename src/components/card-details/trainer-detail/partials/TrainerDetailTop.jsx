import React, { useState } from 'react'
import { GoLocation } from "@react-icons/all-files/go/GoLocation";
import { FaHandshake } from "@react-icons/all-files/fa/FaHandshake";
import { FiShare2 } from "@react-icons/all-files/fi/FiShare2";
import { TiSocialInstagram } from "@react-icons/all-files/ti/TiSocialInstagram";
import { TiSocialTwitter } from "@react-icons/all-files/ti/TiSocialTwitter";
import { TiSocialFacebook } from "@react-icons/all-files/ti/TiSocialFacebook";
import { AiOutlineWhatsApp } from "@react-icons/all-files/ai/AiOutlineWhatsApp";
import { GoPerson } from "@react-icons/all-files/go/GoPerson";
import { GoVerified } from "@react-icons/all-files/go/GoVerified";
import { FiMail } from "@react-icons/all-files/fi/FiMail";
import {
    Link
  } from "react-router-dom";
import RequestJoinTrainingModal from './../modals/RequestJoinTrainingModal';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const TrainerDetailTop = () => {

    const [showRequestJoinTrainingModal, setJoinTrainingModalShow] = useState(false);

    const handleRequestJoinTrainingModalClose = () => setJoinTrainingModalShow(false);
    const handleRequestJoinTrainingModalModal = () => setJoinTrainingModalShow(true);

    const notifyFavTrainer = () => toast("Trainer successfully added your favourites", {
        className: 'warning-background',
        progressClassName: 'toast-progress',
        id:"playerWidget"
    });
    return (
        <>
        <RequestJoinTrainingModal handleRequestJoinTrainingModalClose={handleRequestJoinTrainingModalClose} show={showRequestJoinTrainingModal}  />

        <div className="card">
            <div className="card-body py-4 px-5">
                <div className="align-items-center row m-0 p-0">
                    <div className="avatar avatar-xl col-md-1 player-detail-avatar">
                        <img src="assets/images/faces/1.jpg" className="d-block" alt="Face 1" />
                        <i className="bi bi-award"></i>
                        <i className="bi bi-award"></i>
                        <i className="bi bi-award"></i>
                        <div className="d-flex mt-3">
                            <GoLocation size={20}/>
                            <h6 className="font-bold">İzmir</h6>
                        </div>
                    </div>
                    <div className="col-md-2 text-center">
                        <h6 className="font-bold">John Duck, <span>26</span></h6>
                        <span><GoVerified className="text-success" size={20}/></span>

                    </div>
                    <div className="col-md-3  text-center">
                        <h6 className="font-bold">Email</h6>
                        <p className="text-muted mb-0">bartuu_436@hotmail.com</p>
                    </div>
                    <div className="col-md-2 text-center">
                        <h6 className="font-bold">Phone</h6>
                        <h6 className="text-muted mb-0">+90 555 667 66 80</h6>
                    </div>
                    <div className="buttons col-md-3">
                        <div className="d-flex justify-content-center">
                            <Link className="d-flex p-2 m-2 text-light bg-warning rounded" onClick={notifyFavTrainer}>
                                Add favourites <span className="fw-bold"> + </span>
                            </Link>
                            <Link to="trainer-chat" className="m-2">
                                <FiMail className="m-2 pd-icon" size={27} />
                            </Link>
                            <div className="dropdown m-2">
                                <Link role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                    <FiShare2 className="m-2 pd-icon" size={27}/>
                                </Link>
                                <ul className="dropdown-menu border" aria-labelledby="dropdownMenuLink">
                                    <li><Link className="dropdown-item text-center">With Player <GoPerson /></Link></li>
                                    <li><Link className="dropdown-item text-center">Whatsapp <AiOutlineWhatsApp /></Link></li>
                                    <li><Link className="dropdown-item text-center">Facebook <TiSocialFacebook /></Link></li>
                                    <li><Link className="dropdown-item text-center">Twitter <TiSocialTwitter /></Link></li>
                                    <li><Link className="dropdown-item text-center">Instagram <TiSocialInstagram /></Link></li>
                                </ul>
                            </div>
                        </div>
                        <button className="btn btn-warning m-auto " onClick={handleRequestJoinTrainingModalModal}><FaHandshake className="player-detail-handshake" />Request join training </button>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default TrainerDetailTop
