import SugTrainingCard from "../../cards/suggestions/sug-training-card/SugTrainingCard"

const SeeMoreTrainings = () => {
    return (
        <div className="row">
            {
                [...Array(5)].map((sugCoach) => (
                    <SugTrainingCard/>
                ))
            }
        </div>
    )
}

export default SeeMoreTrainings
