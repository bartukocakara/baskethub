import React from 'react'
import TournamentsCard from '../../components/cards/tournaments/TournamentsCard';
import TournamentSarch from '../../components/layouts/quick-search/tournament-search/TournamentSearch';
import MatchWidget from '../../components/layouts/widgets/match-widget/MatchWidget';

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
