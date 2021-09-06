import { FiEdit } from "@react-icons/all-files/fi/FiEdit";
import { GoVerified } from "@react-icons/all-files/go/GoVerified";
import { GoLocation } from "@react-icons/all-files/go/GoLocation";
import {
    Link
  } from "react-router-dom";

const ProfileTop = () => {
    return (
        <div className="col-12">
            <div className="card">
                <div className="card-body py-4 px-5">
                    <div className="align-items-center row">
                        <div className="avatar avatar-xl col-md-1 player-detail-avatar">
                            <img src="assets/images/avatars/players/player2.jpg" className="d-block" alt="Face 1" />
                            <i className="bi bi-award"></i>
                            <i className="bi bi-award"></i>
                            <i className="bi bi-award"></i>
                            <div className="d-flex mt-3">
                                <GoLocation size={20}/>
                                <h6 className="font-bold">İzmir</h6>
                            </div>
                        </div>
                        <div className="ms-3 name col-md-2 text-center">
                            <h6 className="font-bold">John Duck, <span>28</span></h6>
                            <span><GoVerified className="text-success" size={20}/></span>
                        </div>
                        <div className="col-md-3  text-center">
                            <h6 className="font-bold">Email</h6>
                            <p className="text-muted mb-0">bartuu_436@hotmail.com</p>
                        </div>
                        <div className="col-md-2 text-center">
                            <h6 className="font-bold">Phone</h6>
                            <h6 className="text-muted mb-0">+90 555 667 66 80</h6>
                        </div>
                        <div className="col-md-1 ml-auto">
                            <Link to="profile-edit">
                                <FiEdit size={30} data-toggle="tooltip" data-placement="top" title="Edit"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileTop
