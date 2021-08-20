import SugCoachCard from "../../cards/suggestions/sug-coach-card/SugCoachCard"

const SeeMoreCoaches = () => {
    return (
        <div className="row">
            {
                [...Array(5)].map((sugCoach) => (
                    <SugCoachCard/>
                ))
            }
        </div>
    )
}

export default SeeMoreCoaches
