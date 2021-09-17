import Condition from "../../training-detail/tabs/training-type-tabs/Condition"
import Dribbling from "../../training-detail/tabs/training-type-tabs/Dribbling"
import Quickness from "../../training-detail/tabs/training-type-tabs/Quickness"
import Shooting from "../../training-detail/tabs/training-type-tabs/Shooting"
import Weight from "../../training-detail/tabs/training-type-tabs/Weight"

const TrainingTypesContents = () => {
    return (
        <div class="col-9">
            <div class="tab-content" id="v-pills-tabContent">
                <div class="tab-pane fade show active" id="v-pills-dribbling" role="tabpanel" aria-labelledby="v-dribbling-tab">
                    <Dribbling />
                </div>
                <div class="tab-pane fade" id="v-pills-weight" role="tabpanel" aria-labelledby="v-pills-weight-tab">
                    <Weight />
                </div>
                <div class="tab-pane fade" id="v-pills-quickness" role="tabpanel" aria-labelledby="v-pills-quickness-tab">
                    <Quickness />
                </div>
                <div class="tab-pane fade" id="v-pills-condition" role="tabpanel" aria-labelledby="v-pills-condition-tab">
                    <Condition />
                </div>
                <div class="tab-pane fade" id="v-pills-shooting" role="tabpanel" aria-labelledby="v-pills-shooting-tab">
                    <Shooting />
                </div>
            </div>
        </div>
    )
}

export default TrainingTypesContents
