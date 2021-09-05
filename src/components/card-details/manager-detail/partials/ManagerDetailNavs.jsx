const ManagerDetailNavs = () => {
    return (
        <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
                <a class="nav-link active" id="meeting-calendar-tab" data-bs-toggle="tab" href="#meeting-calendar" role="tab" aria-controls="meeting-calendar" aria-selected="true">Meeting Calendar</a>
            </li>
            <li class="nav-item" role="presentation">
                <a class="nav-link" id="contracted-teams-tab" data-bs-toggle="tab" href="#contracted-teams" role="tab" aria-controls="contracted-teams" aria-selected="false">Contracted Teams</a>
            </li>
            <li class="nav-item" role="presentation">
                <a class="nav-link" id="contracted-players-tab" data-bs-toggle="tab" href="#contracted-players" role="tab" aria-controls="contracted-players" aria-selected="false">Contracted Players</a>
            </li>
            <li class="nav-item" role="presentation">
                <a class="nav-link" id="licences-tab" data-bs-toggle="tab" href="#licences" role="tab" aria-controls="licences" aria-selected="false">Licences</a>
            </li>
            <li class="nav-item" role="presentation">
                <a class="nav-link" id="comments-tab" data-bs-toggle="tab" href="#comments" role="tab" aria-controls="comments" aria-selected="false">Comments</a>
            </li>
        </ul>
    )
}

export default ManagerDetailNavs
