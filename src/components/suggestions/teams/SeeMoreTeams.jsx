import SugTeamCard from "../../cards/suggestions/sug-team-card/SugTeamCard"

const SeeMoreTeams = () => {
    return (
        <div className="row">
            {
                [...Array(5)].map((sugCoach) => (
                    <SugTeamCard/>
                ))
            }
        </div>
    )
}

export default SeeMoreTeams
