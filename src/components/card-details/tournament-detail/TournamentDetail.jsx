import React from 'react';
import TournamentDetailActivities from './partials/TournamentDetailActivities';
import TournamentDetailNavs from './partials/TournamentDetailNavs';
import "./_tournamentDetail.scss";

const TournamentDetail = () => {
    return (
        <>
            <div class="col-md-12">
            <div class="card">
            <h5 class="card-title text-center">İzmir Tournament</h5>
                <div class="card-body">
                    <TournamentDetailNavs />
                    <TournamentDetailActivities />
                </div>
            </div>
            </div>
        </>
    )
}

export default TournamentDetail
