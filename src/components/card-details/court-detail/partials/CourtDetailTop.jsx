
import { GoLocation } from "@react-icons/all-files/go/GoLocation";
import { FiShare2 } from "@react-icons/all-files/fi/FiShare2";
import { TiSocialInstagram } from "@react-icons/all-files/ti/TiSocialInstagram";
import { TiSocialTwitter } from "@react-icons/all-files/ti/TiSocialTwitter";
import { TiSocialFacebook } from "@react-icons/all-files/ti/TiSocialFacebook";
import { AiOutlineWhatsApp } from "@react-icons/all-files/ai/AiOutlineWhatsApp";
import { GoPerson } from "@react-icons/all-files/go/GoPerson";
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail";
import { FaCalendarAlt } from "@react-icons/all-files/fa/FaCalendarAlt";
import {
    Link
  } from "react-router-dom";
const CourtDetailTop = () => {
    return (
        <>
            <div className="d-flex m-auto">
                <h5>Dr. Cavit Spor Salonu</h5>
                <GoLocation />
                <p class="font-bold">İzmir</p>
            </div>

            <div className="d-flex">
                
                <Link to="create-subscription" className="p-2 btn btn-warning m-2">
                    Start subscription<FaCalendarAlt className="m-1" />
                </Link>
                <Link to="message-detail" className="p-2 btn btn-warning m-2">
                    <AiOutlineMail />
                </Link>
                <div class="dropdown">
                        <Link class="btn btn-primary p-2 m-2" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                            <FiShare2   />
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
        </>
    )
}

export default CourtDetailTop