const TrainerDetailNavs = () => {
    return (
        <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
                <a className="nav-link active" id="home-tab" data-bs-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Training Calendar <span className="badge bg-primary">2</span> </a>
            </li>
            <li className="nav-item" role="presentation">
                <a className="nav-link" id="players-tab" data-bs-toggle="tab" href="#players" role="tab" aria-controls="players" aria-selected="false"> Players <span className="badge bg-primary">2</span> </a>
            </li>
            <li className="nav-item" role="presentation">
                <a className="nav-link" id="teams-tab" data-bs-toggle="tab" href="#teams" role="tab" aria-controls="teams" aria-selected="false"> Teams <span className="badge bg-primary">2</span> </a>
            </li>
            <li className="nav-item" role="presentation">
                <a className="nav-link" id="training-types-tab" data-bs-toggle="tab" href="#training-types" role="tab" aria-controls="training-types" aria-selected="false"> Traininig Types <span className="badge bg-primary">2</span> </a>
            </li>
            <li className="nav-item" role="presentation">
                <a className="nav-link" id="licence-tab" data-bs-toggle="tab" href="#licence" role="tab" aria-controls="licence" aria-selected="false"> Licences <span className="badge bg-primary">2</span> </a>
            </li>
            <li className="nav-item" role="presentation">
                <a className="nav-link" id="comments-tab" data-bs-toggle="tab" href="#comments" role="tab" aria-controls="comments" aria-selected="false"> Comments <span className="badge bg-primary">2</span> </a>
            </li>
            <li className="nav-item" role="presentation">
                <a className="nav-link" id="videos-tab" data-bs-toggle="tab" href="#videos" role="tab" aria-controls="videos" aria-selected="false"> Videos <span className="badge bg-primary">2</span> </a>
            </li>
        </ul>
    )
}

export default TrainerDetailNavs
