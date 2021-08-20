import SugManagerCard from "../../cards/suggestions/sug-manager-card/SugManagerCard"

const SeeMoreMatches = () => {
    return (
        <div className="row">
            {
                [...Array(5)].map((sugCoach) => (
                    <SugManagerCard/>
                ))
            }
        </div>
    )
}

export default SeeMoreMatches
