import React from 'react'
import TournamentsCard from '../../cards/tournaments/TournamentsCard';
import TournamentSarch from '../../layouts/quick-search/tournament-search/TournamentSearch';
import MatchWidget from '../../layouts/widgets/match-widget/MatchWidget';

const Tournaments = () => {
    return (
        <>
        <div className="col-md-8">
            <TournamentSarch />
            <section id="content-types">
                <div className="row">
                    {
                        [...Array(10)].map((match) => (
                            <TournamentsCard />
                        ))
                    }
                   
                </div>
            </section>
        </div>
        <MatchWidget />
        </>
    )
}

export default Tournaments
