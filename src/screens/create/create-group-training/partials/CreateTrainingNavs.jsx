const CreateTrainingNavs = () => {
    return (
        <div class="col-3">
            <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <a class="nav-link active" id="v-pills-date-tab" data-bs-toggle="pill" href="#v-pills-date" role="tab" aria-controls="v-date-home" aria-selected="true">Date</a>
                <a class="nav-link" id="v-pills-players-tab" data-bs-toggle="pill" href="#v-pills-players" role="tab" aria-controls="v-pills-players" aria-selected="false">Players</a>
                <a class="nav-link" id="v-pills-training-teams-tab" data-bs-toggle="pill" href="#v-pills-training-teams" role="tab" aria-controls="v-pills-training-teams" aria-selected="false">Training Teams</a>
                <a class="nav-link" id="v-pills-courts-tab" data-bs-toggle="pill" href="#v-pills-courts" role="tab" aria-controls="v-pills-courts" aria-selected="false">Court</a>
                <a class="nav-link" id="v-pills-trainers-tab" data-bs-toggle="pill" href="#v-pills-trainers" role="tab" aria-controls="v-pills-trainers" aria-selected="false">Trainer</a>
                <a class="nav-link" id="v-pills-payment-tab" data-bs-toggle="pill" href="#v-pills-payment" role="tab" aria-controls="v-pills-payment" aria-selected="false">Payment</a>
            </div>
        </div>
    )
}

export default CreateTrainingNavs
