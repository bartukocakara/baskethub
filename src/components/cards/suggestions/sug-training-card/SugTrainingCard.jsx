import { Link } from "react-router-dom"

const SugTrainingCard = () => {
    return (
        <div class="col-md-3">
            <Link class="card border rounded p-2 recommended-card">
                <div class="card-body py-4 px-5">
                    <div class="d-flex align-items-center">
                        <div class="avatar avatar-xl">
                            <img src="../assets/images/faces/1.jpg" alt="Face 1" />
                        </div>
                        <div class="ms-3 name">
                            <h5 class="font-bold">John Duck</h5>
                            <h6 class="text-muted mb-0">@johnducky</h6>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default SugTrainingCard
