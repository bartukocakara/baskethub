import SugPlayerCard from "../../cards/suggestions/sug-player-card/SugPlayerCard"

const SeeMorePlayers = () => {
    return (
        <div className="row">
            {
                [...Array(5)].map((sugCoach) => (
                    <SugPlayerCard/>
                ))
            }
        </div>
    )
}

export default SeeMorePlayers
