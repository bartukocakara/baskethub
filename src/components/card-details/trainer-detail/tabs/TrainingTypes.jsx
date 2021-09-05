import Condition from "../../training-detail/tabs/training-type-tabs/Condition"
import Dribbling from "../../training-detail/tabs/training-type-tabs/Dribbling"
import Quickness from "../../training-detail/tabs/training-type-tabs/Quickness"
import Shooting from "../../training-detail/tabs/training-type-tabs/Shooting"
import Weight from "../../training-detail/tabs/training-type-tabs/Weight"

const TrainingTypes = () => {
    return (
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="col-3">
                        <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            <a class="nav-link active" id="v-pills-dribbling-tab" data-bs-toggle="pill" href="#v-pills-dribbling" role="tab" aria-controls="v-pills-dribbling" aria-selected="true">Dribbling</a>
                            <a class="nav-link" id="v-pills-weight-tab" data-bs-toggle="pill" href="#v-pills-weight" role="tab" aria-controls="v-pills-weight" aria-selected="false">Weight</a>
                            <a class="nav-link" id="v-pills-quickness-tab" data-bs-toggle="pill" href="#v-pills-quickness" role="tab" aria-controls="v-pills-quickness" aria-selected="false">Quickness</a>
                            <a class="nav-link" id="v-pills-condition-tab" data-bs-toggle="pill" href="#v-pills-condition" role="tab" aria-controls="v-pills-condition" aria-selected="false">Condition</a>
                            <a class="nav-link" id="v-pills-shooting-tab" data-bs-toggle="pill" href="#v-pills-shooting" role="tab" aria-controls="v-pills-shooting" aria-selected="false">Shooting</a>
                        </div>
                    </div>
                    <div class="col-9">
                        <div class="tab-content" id="v-pills-tabContent">
                            <div class="tab-pane fade show active" id="v-pills-dribbling-home" role="tabpanel" aria-labelledby="v-dribbling-home-tab">
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
                </div>
            </div>
        </div>
    )
}

export default TrainingTypes
