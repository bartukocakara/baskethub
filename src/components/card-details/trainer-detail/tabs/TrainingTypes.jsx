import TrainingTypesContents from "../training-types-partials/TrainingTypesContents"
import TrainingTypesNavs from "../training-types-partials/TrainingTypesNavs"

const TrainingTypes = () => {
    return (
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <TrainingTypesNavs />
                    <TrainingTypesContents />
                </div>
            </div>
        </div>
    )
}

export default TrainingTypes
