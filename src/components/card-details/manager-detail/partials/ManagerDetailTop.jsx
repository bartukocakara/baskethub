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
const ManagerDetailTop = () => {
    return (
        <div class="card">
            <div class="card-body py-4 px-5">
                <div class="align-items-center row m-0 p-0">
                    <div class="avatar avatar-xl col-md-1 player-detail-avatar">
                        <img src="assets/images/faces/1.jpg" className="d-block" alt="Face 1" />
                        <i className="bi bi-award"></i>
                        <i className="bi bi-award"></i>
                        <i className="bi bi-award"></i>
                        <div className="d-flex mt-3">
                            <GoLocation size={20}/>
                            <h6 class="font-bold">İzmir</h6>
                        </div>
                    </div>
                    <div class="col-md-2 text-center">
                        <h6 class="font-bold">John Duck, <span>26</span></h6>
                        <span><GoVerified className="text-success" size={20}/></span>
                    </div>
                    <div class="col-md-3  text-center">
                        <h6 class="font-bold">Email</h6>
                        <p class="text-muted mb-0">bartuu_436@hotmail.com</p>
                    </div>
                    <div class="col-md-2 text-center">
                        <h6 class="font-bold">Phone</h6>
                        <h6 class="text-muted mb-0">+90 555 667 66 80</h6>
                    </div>
                    <div className="buttons col-md-3">
                        <div className="d-flex justify-content-center">
                            <Link className="d-flex p-2 m-2 text-light bg-warning rounded">
                                Add favourites <span className="fw-bold"> + </span>
                            </Link>
                            <Link to="message-detail" className="m-2">
                                <FiMail className="m-2 pd-icon" size={27} />
                            </Link>
                            <div class="dropdown m-2">
                                <Link role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                    <FiShare2 className="m-2 pd-icon" size={27}/>
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
                        <button className="btn btn-warning m-auto" ><FaHandshake className="player-detail-handshake" />Request Join Match </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ManagerDetailTop
