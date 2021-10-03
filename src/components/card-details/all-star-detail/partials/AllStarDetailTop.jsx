import { FiSettings } from "@react-icons/all-files/fi/FiSettings";
import { FiShare2 } from "@react-icons/all-files/fi/FiShare2";

import { Link } from 'react-router-dom';
import { TiSocialInstagram } from "@react-icons/all-files/ti/TiSocialInstagram";
import { TiSocialTwitter } from "@react-icons/all-files/ti/TiSocialTwitter";
import { TiSocialFacebook } from "@react-icons/all-files/ti/TiSocialFacebook";
import { AiOutlineWhatsApp } from "@react-icons/all-files/ai/AiOutlineWhatsApp";
import { GoPerson } from "@react-icons/all-files/go/GoPerson";
import { useState } from "react";
import QuitAllStarModal from './../modals/QuitAllStarModal';
import { FiLogOut } from "@react-icons/all-files/fi/FiLogOut";

const AllStarDetailTop = () => {

    const [showQuitAllStarModal, setQuitAllStarModal] = useState(false);

    const handleQuitAllStarModalClose = () => setQuitAllStarModal(false);
    const handleQuitAllStarModal = () => setQuitAllStarModal(true);
    return (
        <>
        <QuitAllStarModal handleQuitAllStarModalClose={handleQuitAllStarModalClose} show={showQuitAllStarModal}  />

        <div className="row">
            <div className="col-md-12">
            <h5 className="my-3 mx-2">Amsterdam <span>NET</span> </h5>

            <div className="d-flex">
                    <div className="d-flex">
                        <div className="dropdown">
                            <Link className="btn btn-light m-2 p-2 text-primary border" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                <FiShare2 />
                            </Link>
                            <ul className="dropdown-menu border" aria-labelledby="dropdownMenuLink">
                                <li><Link className="dropdown-item text-center">With Player <GoPerson /></Link></li>
                                <li><Link className="dropdown-item text-center">Whatsapp <AiOutlineWhatsApp /></Link></li>
                                <li><Link className="dropdown-item text-center">Facebook <TiSocialFacebook /></Link></li>
                                <li><Link className="dropdown-item text-center">Twitter <TiSocialTwitter /></Link></li>
                                <li><Link className="dropdown-item text-center">Instagram <TiSocialInstagram /></Link></li>
                            </ul>
                        </div>

                        <Link className="btn btn-light m-2 p-2 text-primary border" to="all-star-settings" >
                            <FiSettings/>                          
                        </Link>
                            <div className="m-auto mx-3">
                                <Link onClick={handleQuitAllStarModal}>
                                    <FiLogOut className="bg-danger text-light p-1 rounded" size={30}/>
                                </Link>
                            </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                
                <div className="card-body">
                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="assets/images/samples/basket-salon1.jpg" className="all-star-slider-img d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="assets/images/samples/basket-salon2.jpg" className="all-star-slider-img d-block w-100" alt="..." />
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default AllStarDetailTop
