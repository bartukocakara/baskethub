const PlayerDetailNavs = () => {
    return (
        <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
                <a class="nav-link active" id="times-tab" data-bs-toggle="tab" href="#times" role="tab" aria-controls="times" aria-selected="true">Available Times <span className="badge bg-primary">15 H</span></a>
            </li>
            <li class="nav-item" role="presentation">
                <a class="nav-link" id="matches-tab" data-bs-toggle="tab" href="#matches" role="tab" aria-controls="matches" aria-selected="false">Matches Played <span className="badge bg-primary">100</span></a>
            </li>
            <li class="nav-item" role="presentation">
                <a class="nav-link" id="teams-tab" data-bs-toggle="tab" href="#teams" role="tab" aria-controls="teams" aria-selected="false">Teams <span className="badge bg-primary">20</span> </a>
            </li>
            <li class="nav-item" role="presentation">
                <a class="nav-link" id="licence-tab" data-bs-toggle="tab" href="#licence" role="tab" aria-controls="licence" aria-selected="false">Licence <span className="badge bg-primary">2</span></a>
            </li>
            <li class="nav-item" role="presentation">
                <a class="nav-link" id="trainings-tab" data-bs-toggle="tab" href="#trainings" role="tab" aria-controls="trainings" aria-selected="false">Trainings <span className="badge bg-primary">2</span></a>
            </li>
            <li class="nav-item" role="presentation">
                <a class="nav-link" id="managers-tab" data-bs-toggle="tab" href="#managers" role="tab" aria-controls="managers" aria-selected="false">Managers <span className="badge bg-primary">2</span></a>
            </li>
        </ul>
    )
}

export default PlayerDetailNavs
