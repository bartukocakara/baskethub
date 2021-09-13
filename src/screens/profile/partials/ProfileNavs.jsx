const ProfileNavs = () => {
    return (
        <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
                <a className="nav-link active" id="calendar-tab" data-bs-toggle="tab" href="#calendar" role="tab" aria-controls="calendar" aria-selected="true">Available Times <span className="badge bg-primary">2</span></a>
            </li>
            <li className="nav-item" role="presentation">
                <a className="nav-link" id="matches-tab" data-bs-toggle="tab" href="#matches" role="tab" aria-controls="matches" aria-selected="false">Matches Played <span className="badge bg-primary">2</span></a>
            </li>
            <li className="nav-item" role="presentation">
                <a className="nav-link" id="requests-tab" data-bs-toggle="tab" href="#requests" role="tab" aria-controls="requests" aria-selected="false">Request List <span className="badge bg-primary">2</span></a>
            </li>
            <li className="nav-item" role="presentation">
                <a className="nav-link" id="matchOptions-tab" data-bs-toggle="tab" href="#matchOptions" role="tab" aria-controls="matchOptions" aria-selected="false">Create Match Options <span className="badge bg-primary">2</span></a>
            </li>
            <li className="nav-item" role="presentation">
                <a className="nav-link" id="licence-tab" data-bs-toggle="tab" href="#licence" role="tab" aria-controls="licence" aria-selected="false">Licences <span className="badge bg-primary">2</span></a>
            </li>
            <li className="nav-item" role="presentation">
                <a className="nav-link" id="training-videos-tab" data-bs-toggle="tab" href="#training-videos" role="tab" aria-controls="training-videos" aria-selected="false">Training Videos <span className="badge bg-primary">2</span></a>
            </li>
            <li className="nav-item" role="presentation">
                <a className="nav-link" id="managers-tab" data-bs-toggle="tab" href="#managers" role="tab" aria-controls="managers" aria-selected="false">Managers <span className="badge bg-primary">2</span></a>
            </li>
            <li className="nav-item" role="presentation">
                <a className="nav-link" id="trainers-tab" data-bs-toggle="tab" href="#trainers" role="tab" aria-controls="trainers" aria-selected="false">Trainers <span className="badge bg-primary">2</span></a>
            </li>
        </ul>
    )
}

export default ProfileNavs
