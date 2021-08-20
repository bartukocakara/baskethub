import SugTournamentCard from "../../cards/suggestions/sug-tournament-card/SugTournamentCard"

const SeeMoreTournaments = () => {
    return (
        <div className="row">
            {
                [...Array(5)].map((sugCoach) => (
                    <SugTournamentCard/>
                ))
            }
        </div>
    )
}

export default SeeMoreTournaments
