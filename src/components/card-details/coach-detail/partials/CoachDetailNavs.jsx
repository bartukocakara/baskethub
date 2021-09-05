const CoachDetailNavs = () => {
    return (
        <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
                <a class="nav-link active" id="available-times-tab" data-bs-toggle="tab" href="#available-times" role="tab" aria-controls="available-times" aria-selected="true">Available Times</a>
            </li>
            <li class="nav-item" role="presentation">
                <a class="nav-link" id="matches-managed-tab" data-bs-toggle="tab" href="#matches-managed" role="tab" aria-controls="matches-managed" aria-selected="false">Matches Managed</a>
            </li>
            <li class="nav-item" role="presentation">
                <a class="nav-link" id="teams-tab" data-bs-toggle="tab" href="#teams" role="tab" aria-controls="teams" aria-selected="false">Teams</a>
            </li>
            <li class="nav-item" role="presentation">
                <a class="nav-link" id="licence-tab" data-bs-toggle="tab" href="#licence" role="tab" aria-controls="licence" aria-selected="false">Licences</a>
            </li>
            <li class="nav-item" role="presentation">
                <a class="nav-link" id="comments-tab" data-bs-toggle="tab" href="#comments" role="tab" aria-controls="comments" aria-selected="false">Comments</a>
            </li>
        </ul>
    )
}

export default CoachDetailNavs
