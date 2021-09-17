const TrainingTypesNavs = () => {
    return (
        <div class="col-3">
            <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <a class="nav-link active" id="v-pills-dribbling-tab" data-bs-toggle="pill" href="#v-pills-dribbling" role="tab" aria-controls="v-pills-dribbling" aria-selected="true">Dribbling</a>
                <a class="nav-link" id="v-pills-weight-tab" data-bs-toggle="pill" href="#v-pills-weight" role="tab" aria-controls="v-pills-weight" aria-selected="false">Weight</a>
                <a class="nav-link" id="v-pills-quickness-tab" data-bs-toggle="pill" href="#v-pills-quickness" role="tab" aria-controls="v-pills-quickness" aria-selected="false">Quickness</a>
                <a class="nav-link" id="v-pills-condition-tab" data-bs-toggle="pill" href="#v-pills-condition" role="tab" aria-controls="v-pills-condition" aria-selected="false">Condition</a>
                <a class="nav-link" id="v-pills-shooting-tab" data-bs-toggle="pill" href="#v-pills-shooting" role="tab" aria-controls="v-pills-shooting" aria-selected="false">Shooting</a>
            </div>
        </div>
    )
}

export default TrainingTypesNavs
