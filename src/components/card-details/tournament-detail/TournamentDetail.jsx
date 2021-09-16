import React from 'react';
import TournamentDetailActivities from './partials/TournamentDetailActivities';
import TournamentDetailNavs from './partials/TournamentDetailNavs';
import "./_tournamentDetail.scss";
import TournamentDetailTop from './partials/TournamentDetailTop';

const TournamentDetail = () => {
    return (
        <>
            <div className="col-md-12">
            <div className="card">
                <TournamentDetailTop />
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
