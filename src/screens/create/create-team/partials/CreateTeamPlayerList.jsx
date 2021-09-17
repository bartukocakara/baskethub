import { Avatar } from "@material-ui/core"
import { AvatarGroup } from "@material-ui/lab"
import { Link } from "react-router-dom"

const CreateTeamPlayerList = () => {
    return (
        <>
            {
                [...Array(12)].map((player) => (
                <div className="col-md-3 mb-3">
                    <div className="border rounded p-3">
                        <div class="avatar avatar-lg me-3 d-flex justify-content-between">
                            <img src="assets/images/faces/2.jpg" alt="create team" />
                            <div className="m-auto">
                                <span className="fw-bold d-block">Player Name</span>
                                <label>İzmir</label>
                            </div>
                            <input type="checkbox" class="form-check-input m-auto" />
                        </div>
                    </div>
                </div>
                ))
            }
                
             <nav aria-label="Page navigation example">
                <ul class="pagination pagination-primary w-25 m-auto">
                    <li class="page-item"><Link class="page-link">Prev</Link></li>
                    <li class="page-item"><Link class="page-link">1</Link></li>
                    <li class="page-item active"><Link class="page-link">2</Link></li>
                    <li class="page-item"><Link class="page-link">3</Link></li>
                    <li class="page-item"><Link class="page-link">Next</Link></li>
                </ul>
            </nav>
            <div class="card col-md-4 m-auto">
                <div class="card-body  rounded text-center">
                    <div class="align-items-center w-100 d-flex" >
                        <AvatarGroup max={4} className="">
                            <Avatar alt="Remy Sharp" src="assets/images/faces/2.jpg" />
                            <Avatar alt="Travis Howard" src="assets/images/faces/1.jpg" />
                            <Avatar alt="Cindy Baker" src="assets/images/faces/4.jpg" />
                            <Avatar alt="Agnes Walker" src="assets/images/faces/5.jpg" />
                            <Avatar alt="Trevor Henderson" src="assets/images/faces/2.jpg" />
                        </AvatarGroup>
                        <p className="m-auto">players selected</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateTeamPlayerList
