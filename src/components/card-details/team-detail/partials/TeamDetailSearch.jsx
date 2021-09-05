import { FiSettings } from "@react-icons/all-files/fi/FiSettings"
import { GoPerson } from "@react-icons/all-files/go/GoPerson";
import { TiSocialInstagram } from "@react-icons/all-files/ti/TiSocialInstagram";
import { TiSocialTwitter } from "@react-icons/all-files/ti/TiSocialTwitter";
import { TiSocialFacebook } from "@react-icons/all-files/ti/TiSocialFacebook";
import { AiOutlineWhatsApp } from "@react-icons/all-files/ai/AiOutlineWhatsApp";
import {
    Link
  } from "react-router-dom";
import { FiShare2 } from "@react-icons/all-files/fi/FiShare2";

const TeamDetailTop = () => {
    return (
            <div class="card-header d-flex justify-content-center align-items-center">
                <span className="badge bg-primary mb-1 mr-2">12</span><h4 className="text-center">Bornova Team Detail</h4>
                    <div className="d-flex">
                        <div class="dropdown">
                            <Link class="btn btn-light m-2 p-2 text-primary border" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                            <FiSettings/>                            
                            </Link>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <li><Link class="dropdown-item text-center">Edit Team <GoPerson /></Link></li>
                                <li><Link class="dropdown-item text-center">Exit Player -</Link></li>
                                <li><Link class="dropdown-item text-center">Warn Player !</Link></li>
                            </ul>
                        </div>
                        <div class="dropdown">
                        <Link class="btn btn-light m-2 p-2 text-primary border" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                            <FiShare2 />
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
             </div>
    )
}

export default TeamDetailTop
