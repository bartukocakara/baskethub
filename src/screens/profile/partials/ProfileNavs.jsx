const ProfileNavs = () => {
    return (
        <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
                <a className="nav-link active" id="calendar-tab" data-bs-toggle="tab" href="#calendar" role="tab" aria-controls="calendar" aria-selected="true">Available Times</a>
            </li>
            <li className="nav-item" role="presentation">
                <a className="nav-link" id="matches-tab" data-bs-toggle="tab" href="#matches" role="tab" aria-controls="matches" aria-selected="false">Matches Played</a>
            </li>
            <li className="nav-item" role="presentation">
                <a className="nav-link" id="requests-tab" data-bs-toggle="tab" href="#requests" role="tab" aria-controls="requests" aria-selected="false">Requests List</a>
            </li>
            <li className="nav-item" role="presentation">
                <a className="nav-link" id="matchOptions-tab" data-bs-toggle="tab" href="#matchOptions" role="tab" aria-controls="matchOptions" aria-selected="false">Create Match Options</a>
            </li>
            <li className="nav-item" role="presentation">
                <a className="nav-link" id="licence-tab" data-bs-toggle="tab" href="#licence" role="tab" aria-controls="licence" aria-selected="false">Licence</a>
            </li>
            <li className="nav-item" role="presentation">
                <a className="nav-link" id="training-videos-tab" data-bs-toggle="tab" href="#training-videos" role="tab" aria-controls="training-videos" aria-selected="false">Training Videos</a>
            </li>
        </ul>
    )
}

export default ProfileNavs
