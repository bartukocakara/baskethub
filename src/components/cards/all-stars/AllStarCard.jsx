import { Link } from 'react-router-dom'
import { FiShare2 } from "@react-icons/all-files/fi/FiShare2";

import { TiSocialInstagram } from "@react-icons/all-files/ti/TiSocialInstagram";
import { TiSocialTwitter } from "@react-icons/all-files/ti/TiSocialTwitter";
import { TiSocialFacebook } from "@react-icons/all-files/ti/TiSocialFacebook";
import { AiOutlineWhatsApp } from "@react-icons/all-files/ai/AiOutlineWhatsApp";
import { GoPerson } from "@react-icons/all-files/go/GoPerson";

const AllStarCard = () => {
    return (
        <div className="col-xl-4 col-md-6 col-sm-12">
            <Link to="all-star-detail">
            <div className="card">
                <div className="card-content">
                    <img src="assets/images/samples/basket-salon2.jpg" className="card-img-top img-fluid" style={{ height:"100px" }} alt="singleminded" />
                    <div className="card-body text-center">
                        
                        <h6>Amsterdam, <span classNameName="fw-bold">Netherlands</span></h6>
                        <p className="card-text">
                            Chocolate sesame snaps apple pie danish cupcake sweet roll jujubes
                            tiramisu.Gummies
                            bonbon apple pie fruitcake icing biscuit apple pie jelly-o sweet roll.
                        </p>
                    </div>
                </div>
                <div className=" p-2 d-flex justify-content-between">
                    <Link to="all-star-detail" className="btn btn-light">
                        Details
                    </Link>
                    <div class="dropdown">
                        <button class="btn btn-light text-primary" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            <FiShare2 className="card-footer-icon" />
                        </button>
                        <ul class="dropdown-menu mt-1" aria-labelledby="dropdownMenuButton1">
                            <li><Link class="dropdown-item text-center">With Player <GoPerson /></Link></li>
                            <li><Link class="dropdown-item text-center">Whatsapp <AiOutlineWhatsApp /></Link></li>
                            <li><Link class="dropdown-item text-center">Facebook <TiSocialFacebook /></Link></li>
                            <li><Link class="dropdown-item text-center">Twitter <TiSocialTwitter /></Link></li>
                            <li><Link class="dropdown-item text-center">Instagram <TiSocialInstagram /></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            </Link>
        </div>
    )
}

export default AllStarCard
