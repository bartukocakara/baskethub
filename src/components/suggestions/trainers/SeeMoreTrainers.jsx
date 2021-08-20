import SugTrainerCard from "../../cards/suggestions/sug-trainer-card/SugTrainerCard"

const SeeMoreTrainers = () => {
    return (
        <div className="row">
            {
                [...Array(5)].map((sugCoach) => (
                    <SugTrainerCard/>
                ))
            }
        </div>
    )
}

export default SeeMoreTrainers
