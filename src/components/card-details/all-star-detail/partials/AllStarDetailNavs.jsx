const AllStarDetailNavs = () => {
    return (
        <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
                <a class="nav-link active" id="activities-tab" data-bs-toggle="tab" href="#activities" role="tab" aria-controls="activities" aria-selected="true">Activities</a>
            </li>
            <li class="nav-item" role="presentation">
                <a class="nav-link" id="players-tab" data-bs-toggle="tab" href="#players" role="tab" aria-controls="players" aria-selected="false">Players</a>
            </li>
            <li class="nav-item" role="presentation">
                <a class="nav-link" id="prizes-tab" data-bs-toggle="tab" href="#prizes" role="tab" aria-controls="prizes" aria-selected="false">Prizes</a>
            </li>
            <li class="nav-item" role="presentation">
                <a class="nav-link" id="news-tab" data-bs-toggle="tab" href="#news" role="tab" aria-controls="news" aria-selected="false">News</a>
            </li>
        </ul>
    )
}

export default AllStarDetailNavs
