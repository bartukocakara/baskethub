import { FiShare2 } from "@react-icons/all-files/fi/FiShare2";
import { TiSocialInstagram } from "@react-icons/all-files/ti/TiSocialInstagram";
import { TiSocialTwitter } from "@react-icons/all-files/ti/TiSocialTwitter";
import { TiSocialFacebook } from "@react-icons/all-files/ti/TiSocialFacebook";
import { AiOutlineWhatsApp } from "@react-icons/all-files/ai/AiOutlineWhatsApp";
import { GoPerson } from "@react-icons/all-files/go/GoPerson";
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail";
import {
    Link
  } from "react-router-dom";
const MatchDetailTop = () => {
    return (
        <div className="d-flex p-2">
            <h6 className="m-auto m-2"><Link to="court-detail">Balçova Spor Salonu</Link></h6>
            
            <div className="d-flex">
            <Link to="match-chat" className="p-2 btn btn-warning m-2">
                <AiOutlineMail className="card-footer-icon" />
            </Link>
            <div class="dropdown">
                    <Link class="btn btn-primary p-2 m-2" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                        <FiShare2 className="card-footer-icon"  />
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

export default MatchDetailTop
