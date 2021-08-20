import SugCourtCard from "../../cards/suggestions/sug-court-card/SugCourtCard"

const SeeMoreCourts = () => {
    return (
        <div className="row">
            {
                [...Array(5)].map((sugCoach) => (
                    <SugCourtCard/>
                ))
            }
        </div>
    )
}

export default SeeMoreCourts
