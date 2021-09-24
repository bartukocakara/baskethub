const CreateTournamentNavs = () => {
    return (
        <div class="col-3">
            <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <a class="nav-link active" id="v-pills-teams-tab" data-bs-toggle="pill" href="#v-pills-teams" role="tab" aria-controls="v-pills-teams" aria-selected="true">Teams</a>
                <a class="nav-link" id="v-pills-courts-tab" data-bs-toggle="pill" href="#v-pills-courts" role="tab" aria-controls="v-pills-courts" aria-selected="false">Courts</a>
                <a class="nav-link" id="v-pills-dates-tab" data-bs-toggle="pill" href="#v-pills-dates" role="tab" aria-controls="v-pills-dates" aria-selected="false">Dates</a>
                <a class="nav-link" id="v-pills-players-tab" data-bs-toggle="pill" href="#v-pills-players" role="tab" aria-controls="v-pills-players" aria-selected="false">Players</a>
                <a class="nav-link" id="v-pills-rules-tab" data-bs-toggle="pill" href="#v-pills-rules" role="tab" aria-controls="v-pills-rules" aria-selected="false">Rules</a>
                <a class="nav-link" id="v-pills-gifts-tab" data-bs-toggle="pill" href="#v-pills-gifts" role="tab" aria-controls="v-pills-gifts" aria-selected="false">Gifts</a>
                <a class="nav-link" id="v-pills-prizes-tab" data-bs-toggle="pill" href="#v-pills-prizes" role="tab" aria-controls="v-pills-prizes" aria-selected="false">Prizes</a>
                <a class="nav-link" id="v-pills-referees-tab" data-bs-toggle="pill" href="#v-pills-referees" role="tab" aria-controls="v-pills-referees" aria-selected="false">Referees</a>
                <a class="nav-link" id="v-pills-privacy-tab" data-bs-toggle="pill" href="#v-pills-privacy" role="tab" aria-controls="v-pills-privacy" aria-selected="false">Privacy</a>
                <a class="nav-link" id="v-pills-payment-tab" data-bs-toggle="pill" href="#v-pills-payment" role="tab" aria-controls="v-pills-payment" aria-selected="false">Payment</a>
            </div>
        </div>
    )
}

export default CreateTournamentNavs
