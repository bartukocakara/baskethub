import { useState } from "react";
import { FiShare2 } from "@react-icons/all-files/fi/FiShare2";
import { FiSettings } from "@react-icons/all-files/fi/FiSettings";
import { FaHandshake } from "@react-icons/all-files/fa/FaHandshake";
import { TiSocialInstagram } from "@react-icons/all-files/ti/TiSocialInstagram";
import { TiSocialTwitter } from "@react-icons/all-files/ti/TiSocialTwitter";
import { TiSocialFacebook } from "@react-icons/all-files/ti/TiSocialFacebook";
import { AiOutlineWhatsApp } from "@react-icons/all-files/ai/AiOutlineWhatsApp";
import { GoPerson } from "@react-icons/all-files/go/GoPerson";
import { Link } from 'react-router-dom';
import ExitPlayerModal from './../../../modals/join-tournament/JoinTournamentTeamModal';

const TournamentDetailTop = () => {

    const [showJoinTournamentTeamModal, setJoinTournamentTeamModalShow] = useState(false);
  
    const handleJoinTournamentTeamModalClose = () => setJoinTournamentTeamModalShow(false);
    const handleJoinTournamentTeamModalShow = () => setJoinTournamentTeamModalShow(true);
    return (
        <>
        <ExitPlayerModal handleJoinTournamentTeamModalClose={handleJoinTournamentTeamModalClose} show={showJoinTournamentTeamModal} />

        <div className="d-flex m-auto">
            <h5 className="card-title text-center m-2">İzmir Tournament</h5>
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
                <Link className="btn btn-light m-2 p-2 text-primary border" to="tournament-settings" >
                    <FiSettings/>                          
                </Link>
            </div>
            <Link className="btn btn-warning m-2" onClick={handleJoinTournamentTeamModalShow}>Send team join request <FaHandshake/></Link>
        </div>
        </>
    )
}

export default TournamentDetailTop
