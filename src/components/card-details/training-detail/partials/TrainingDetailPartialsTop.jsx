import { AiFillCheckCircle } from "@react-icons/all-files/ai/AiFillCheckCircle";
import { RiErrorWarningFill } from "@react-icons/all-files/ri/RiErrorWarningFill";
import { MdCancel } from "@react-icons/all-files/md/MdCancel";
import { GoPerson } from "@react-icons/all-files/go/GoPerson";
import { TiSocialInstagram } from "@react-icons/all-files/ti/TiSocialInstagram";
import { TiSocialTwitter } from "@react-icons/all-files/ti/TiSocialTwitter";
import { TiSocialFacebook } from "@react-icons/all-files/ti/TiSocialFacebook";
import { AiOutlineWhatsApp } from "@react-icons/all-files/ai/AiOutlineWhatsApp";
import { FiShare2 } from "@react-icons/all-files/fi/FiShare2";
import { FiSettings } from "@react-icons/all-files/fi/FiSettings";

import { Link } from "react-router-dom";
const TrainingDetailPartialsTop = () => {
    return (
        <div className="d-flex">
            <div className="p-4">
                <h5 class="card-title text-center">İzmir Training</h5>
                <div class="progress progress-info w-50 m-auto">
                    <div class="progress-bar" role="progressbar" style={{ width: "60%" }} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                    </div>
                </div>
                <div className="d-flex m-auto justify-content-between px-2 py-1">
                    <span className="fw-bold d-inline mx-2 px-4">Dates Decided <AiFillCheckCircle size={22} className="text-success"/></span>
                    <span className="fw-bold d-inline mx-2 px-4">Courts Reserved <AiFillCheckCircle size={22} className="text-success"/></span>
                    <span className="fw-bold d-inline mx-2 px-4">Payment Completed<RiErrorWarningFill size={22} className="text-warning"/></span>
                    <span className="fw-bold d-inline mx-2 px-4">All Players Activated<MdCancel size={22} className="text-danger"/></span>
                </div>
            </div>
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
                <Link className="btn btn-light m-2 p-2 rounded text-primary border" to="training-settings"><FiSettings/></Link>
            </div>
        </div>
    )
}

export default TrainingDetailPartialsTop
