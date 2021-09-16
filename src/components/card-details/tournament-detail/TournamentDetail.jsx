import React from 'react';
import { Link } from 'react-router-dom';
import TournamentDetailActivities from './partials/TournamentDetailActivities';
import TournamentDetailNavs from './partials/TournamentDetailNavs';
import "./_tournamentDetail.scss";
import { AiFillSetting } from "@react-icons/all-files/ai/AiFillSetting";
import { FaHandshake } from "@react-icons/all-files/fa/FaHandshake";

const TournamentDetail = () => {
    return (
        <>
            <div className="col-md-12">
            <div className="card">
                <div className="d-flex m-auto">
                    <h5 className="card-title text-center m-2">İzmir Tournament</h5>
                    <Link to="tournament-settings" className="m-2"><AiFillSetting size={25}/></Link>
                    <Link className="btn btn-warning m-2">Send join request <FaHandshake/></Link>
                </div>
                <div className="card-body">
                    <TournamentDetailNavs />
                    <TournamentDetailActivities />
                </div>
            </div>
            </div>
        </>
    )
}

export default TournamentDetail
