const NewMatchNavs = () => {
    return (
        <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
                <a class="nav-link active" id="name-tab" data-bs-toggle="tab" href="#name" role="tab" aria-controls="name" aria-selected="true">Name</a>
            </li>
            <li class="nav-item" role="presentation">
                <a class="nav-link" id="payment-tab" data-bs-toggle="tab" href="#payment" role="tab" aria-controls="payment" aria-selected="false">Payment</a>
            </li>
            <li class="nav-item" role="presentation">
                <a class="nav-link" id="date-tab" data-bs-toggle="tab" href="#date" role="tab" aria-controls="date" aria-selected="false">Date</a>
            </li>
            <li class="nav-item" role="presentation">
                <a class="nav-link" id="court-usage-tab" data-bs-toggle="tab" href="#court-usage" role="tab" aria-controls="court-usage" aria-selected="false">Court usage</a>
            </li>
            <li class="nav-item" role="presentation">
                <a class="nav-link" id="coupon-tab" data-bs-toggle="tab" href="#coupon" role="tab" aria-controls="coupon" aria-selected="false">Coupon</a>
            </li>
            <li class="nav-item" role="presentation">
                <a class="nav-link" id="players-tab" data-bs-toggle="tab" href="#players" role="tab" aria-controls="players" aria-selected="false">Players</a>
            </li>
            <li class="nav-item" role="presentation">
                <a class="nav-link" id="teams-tab" data-bs-toggle="tab" href="#teams" role="tab" aria-controls="teams" aria-selected="false">Teams</a>
            </li>
            <li class="nav-item" role="presentation">
                <a class="nav-link" id="courts-tab" data-bs-toggle="tab" href="#courts" role="tab" aria-controls="courts" aria-selected="false">Courts</a>
            </li>
            <li class="nav-item" role="presentation">
                <a class="nav-link" id="prizes-tab" data-bs-toggle="tab" href="#prizes" role="tab" aria-controls="prizes" aria-selected="false">Prizes</a>
            </li>
            <li class="nav-item" role="presentation">
                <a class="nav-link" id="notes-tab" data-bs-toggle="tab" href="#notes" role="tab" aria-controls="notes" aria-selected="false">Notes</a>
            </li>
            <li class="nav-item" role="presentation">
                <a class="nav-link" id="privacy-tab" data-bs-toggle="tab" href="#privacy" role="tab" aria-controls="privacy" aria-selected="false">Privacy</a>
            </li>
        </ul>
    )
}

export default NewMatchNavs
