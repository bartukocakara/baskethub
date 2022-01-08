import React, { useState } from 'react'
// import {ImTree} from "@react-icons/all-files/im/ImTree";
// import {GiStrong} from "@react-icons/all-files/gi/GiStrong";
// import {FaRunning} from "@react-icons/all-files/fa/FaRunning";
// import {FaUserTie} from "@react-icons/all-files/fa/FaUserTie";
import {FaBasketballBall} from "@react-icons/all-files/fa/FaBasketballBall";

import {
    Link,
  } from "react-router-dom";
import { GiBasketballBasket } from "@react-icons/all-files/gi/GiBasketballBasket";
import { RiTeamLine } from "@react-icons/all-files/ri/RiTeamLine";
import { GoPerson } from "@react-icons/all-files/go/GoPerson";


import CourtSearchModal from '../../../modals/search/court-search/CourtSearchModal';
import PlayerSearchModal from '../../../modals/search/player-search/PlayerSearchModal';
import TeamSearchModal from '../../../modals/search/team-search/TeamSearchModal';
// import TrainerSearchModal from '../../../modals/search/trainer-search/TrainerSearchModal';
// import TournamentSearchModal from '../../../modals/search/tournament-search/TournamentSearchModal';
// import TrainingSearchModal from '../../../modals/search/training-search/TrainingSearchModal';
// import CoachSearchModal from '../../../modals/search/coach-search/CoachSearchModal';
// import ManagerSearchModal from '../../../modals/search/manager-search/ManagerSearchModal';
const NewSearch = () => {

    const [showTeamSearch, setTeamShow] = useState(false);
  
    const handleTeamClose = () => setTeamShow(false);
    const handleTeamShow = () => setTeamShow(true);

    const [showPlayerSearch, setPlayerShow] = useState(false);
  
    const handlePlayerClose = () => setPlayerShow(false);
    const handlePlayerShow = () => setPlayerShow(true);

    const [showCourtSearch, setCourtShow] = useState(false);
  
    const handleCourtClose = () => setCourtShow(false);
    const handleCourtShow = () => setCourtShow(true);

    // const [showTrainerSearch, setTrainerShow] = useState(false);
  
    // const handleTrainerClose = () => setTrainerShow(false);
    // const handleTrainerShow = () => setTrainerShow(true);

    // const [showTournamentSearch, setTournamentShow] = useState(false);
  
    // const handleTournamentClose = () => setTournamentShow(false);
    // const handleTournamentShow = () => setTournamentShow(true);

    // const [showTrainingSearch, setTrainingShow] = useState(false);
  
    // const handleTrainingClose = () => setTrainingShow(false);
    // const handleTrainingShow = () => setTrainingShow(true);

    // const [showCoachSearch, setCoachShow] = useState(false);
  
    // const handleCoachClose = () => setCoachShow(false);
    // const handleCoachShow = () => setCoachShow(true);

    // const [showManagerSearch, setManagerShow] = useState(false);
  
    // const handleManagerClose = () => setManagerShow(false);
    // const handleManagerShow = () => setManagerShow(true);
    return (
        <>
            <CourtSearchModal handleCourtClose={handleCourtClose} show={showCourtSearch} />
            <PlayerSearchModal handlePlayerClose={handlePlayerClose} show={showPlayerSearch} />
            <TeamSearchModal handleTeamClose={handleTeamClose} show={showTeamSearch} />
            {/* <TrainerSearchModal handleTrainerClose={handleTrainerClose} show={showTrainerSearch}/>
            <TournamentSearchModal handleTournamentClose={handleTournamentClose} show={showTournamentSearch}/>
            <TrainingSearchModal handleTrainingClose={handleTrainingClose} show={showTrainingSearch}/>
            <CoachSearchModal handleCoachClose={handleCoachClose} show={showCoachSearch}/>
            <ManagerSearchModal handleManagerClose={handleManagerClose} show={showManagerSearch}/> */}
            <li exact className="sidebar-item has-sub">
                <Link className="sidebar-link">
                <i class="bi bi-search"></i>
                <span>New Search</span>
                </Link>
                <ul className="submenu" style={{display: "none"}}>
                    <li className="submenu-item">
                        <Link variant="primary" onClick={handleCourtShow}>
                            <FaBasketballBall className="m-1" size={18} />
                            Match Search
                        </Link>
                    </li>
                    <li className="submenu-item">
                        <Link variant="primary" onClick={handleCourtShow}>
                            <GiBasketballBasket className="m-1" size={18} />
                            Court Search
                        </Link>
                    </li>
                    <li className="submenu-item">
                        <Link variant="primary" onClick={handleTeamShow}>
                            <RiTeamLine className="m-1" size={18}/>
                            Team Search
                        </Link>
                    </li>
                    <li className="submenu-item">
                        <Link variant="primary" onClick={handlePlayerShow}>
                            <GoPerson className="m-1" size={18} />
                            Player Search
                        </Link>
                    </li>
                    {/* <li className="submenu-item">
                        <Link variant="primary" onClick={handleTrainingShow}>
                            <FaRunning className="m-1" size={18} />
                            Training Search
                        </Link>
                    </li>
                    <li className="submenu-item">
                        <Link variant="primary" onClick={handleCoachShow}>
                            <FaUserTie className="m-1" size={18} />
                            Coach Search
                        </Link>
                    </li>
                    <li className="submenu-item">
                        <Link variant="primary" onClick={handleManagerShow}>
                            <FaUserTie className="m-1" size={18} />
                            Manager Search
                        </Link>
                    </li>
                    <li className="submenu-item">
                        <Link variant="primary" className="d-flex" onClick={handleTournamentShow}>
                            <ImTree className="m-1" size={18} />
                            <span>
                            Tournament Search
                            </span>
                        </Link>
                    </li>
                    <li className="submenu-item">
                        <Link variant="primary" onClick={handleTrainerShow}>
                            <GiStrong className="m-1" size={18} />
                            Trainer Search
                        </Link>
                    </li> */}
                </ul>
            </li>
        </>
    )
}

export default NewSearch
