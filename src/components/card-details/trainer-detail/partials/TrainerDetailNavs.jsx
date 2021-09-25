const TrainerDetailNavs = () => {
    return (
        <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
                <a class="nav-link active" id="home-tab" data-bs-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Training Calendar</a>
            </li>
            <li class="nav-item" role="presentation">
                <a class="nav-link" id="players-tab" data-bs-toggle="tab" href="#players" role="tab" aria-controls="players" aria-selected="false">Players</a>
            </li>
            <li class="nav-item" role="presentation">
                <a class="nav-link" id="teams-tab" data-bs-toggle="tab" href="#teams" role="tab" aria-controls="teams" aria-selected="false">Teams</a>
            </li>
            <li class="nav-item" role="presentation">
                <a class="nav-link" id="training-types-tab" data-bs-toggle="tab" href="#training-types" role="tab" aria-controls="training-types" aria-selected="false">Traininig Types</a>
            </li>
            <li class="nav-item" role="presentation">
                <a class="nav-link" id="licence-tab" data-bs-toggle="tab" href="#licence" role="tab" aria-controls="licence" aria-selected="false">Licences</a>
            </li>
            <li class="nav-item" role="presentation">
                <a class="nav-link" id="comments-tab" data-bs-toggle="tab" href="#comments" role="tab" aria-controls="comments" aria-selected="false">Comments</a>
            </li>
            <li class="nav-item" role="presentation">
                <a class="nav-link" id="videos-tab" data-bs-toggle="tab" href="#videos" role="tab" aria-controls="videos" aria-selected="false">Videos</a>
            </li>
        </ul>
    )
}

export default TrainerDetailNavs
