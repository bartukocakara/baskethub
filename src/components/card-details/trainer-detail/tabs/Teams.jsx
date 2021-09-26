import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import { Link } from "react-router-dom"
import { FaFileContract } from "@react-icons/all-files/fa/FaFileContract";

const Teams = () => {
    return (
        <div className="row">
            {
            [...Array(5)].map((player) => (
                <div class="col-md-3">
                    <div to="team-detail" class="card border rounded card-shadow">
                        <div class="card-body text-center">
                            <span className="text-center fw-bold m-2">Karşıyaka Team</span>
                            <div class="avatar avatar-lg m-1 d-block">
                                <AvatarGroup max={4}  className="w-50 m-auto">
                                    <Avatar alt="Remy Sharp" src="assets/images/faces/2.jpg" />
                                    <Avatar alt="Travis Howard" src="assets/images/faces/1.jpg" />
                                    <Avatar alt="Cindy Baker" src="assets/images/faces/4.jpg" />
                                    <Avatar alt="Agnes Walker" src="assets/images/faces/2.jpg" />
                                    <Avatar alt="Trevor Henderson" src="assets/images/faces/2.jpg" />
                                </AvatarGroup>
                            </div>
                            <div class="mt-2 d-flex">
                                <p class="font-bold">Start Date :</p> <span>16/12/2022</span>
                            </div>                                    
                            <div class="d-flex">
                                <p class="font-bold">End Date :</p> <span>16/12/2022</span>
                            </div>
                        </div>
                        <div class="card-footer d-flex justify-content-between">
                            <Link class="btn btn-primary">
                                Detail
                            </Link>
                            <Link to="contract-detail" class="btn btn-primary">
                                <FaFileContract />  
                            </Link>
                        </div>
                    </div>
                </div>
            ))
        
        }
    </div>
    )
}

export default Teams
