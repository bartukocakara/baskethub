import React from 'react'
import { BsFillStarFill } from "@react-icons/all-files/bs/BsFillStarFill";
import { BsPencilSquare } from "@react-icons/all-files/bs/BsPencilSquare";
import {
    Link
} from "react-router-dom"
const CreateTeam = () => {
    return (
        <div>
            <h5 className="text-center screen-title">Create Team</h5>
            <div className="card">
                <div className="card-body">
                    <h6 className="text-center">Fiil the blanks <BsPencilSquare /></h6>
                    <div className="row">
                        <div className="col-md-12 row">
                            <div className="form-group col-md-4">
                                <h6>Team Name</h6>
                                <input className="form-control w-100" />
                            </div>
                            <div className="form-group col-md-4">
                                <h6>Team Country</h6>
                                <select className="form-control">
                                        <option>Germany</option>
                                        <option>Spain</option>
                                        <option>Netherlands</option>
                                </select>
                            </div>
                            <div className="form-group col-md-4">
                                <h6>Team City</h6>
                                <select className="form-control">
                                    <option>Berlin</option>
                                    <option>Barcelona</option>
                                    <option>Amsterdam</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-12 row m-2 p-2">
                            <div className="w-100 d-flex m-auto row">
                                <div className="col-md-3"></div>
                                <h6 className="text-center p-3 m-auto col-md-3">Favourite Player List <BsFillStarFill /> </h6>
                                <div class="form-group position-relative col-md-4 has-icon-right d-inline w-25">
                                    <input type="text" class="form-control p-2" placeholder="Quick search..." />
                                    <div class="form-control-icon">
                                        <i class="bi bi-search m-3"></i>
                                    </div>
                                </div>
                            </div>
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
                        </div>
                        <div className="col-md-2 py-4 m-auto form-check form-switch">
                            <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                            <h6 class="form-check-label" for="flexSwitchCheckDefault">Privacy Status</h6>
                        </div>
                        <div className="col-md-12 row m-2 p-2">
                            <button className="btn btn-success w-25 fw-bold m-auto">Create</button>
                        </div>
                   </div>
               </div>
           </div>
        </div>
    )
}

export default CreateTeam
