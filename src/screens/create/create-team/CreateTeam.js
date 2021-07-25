import React from 'react'
import { BsFillStarFill } from "@react-icons/all-files/bs/BsFillStarFill";
import { BsPencilSquare } from "@react-icons/all-files/bs/BsPencilSquare";

const CreateTeam = () => {
    return (
        <div>
            <h5 className="text-center">Create Team</h5>
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
                        <h6 className="text-center p-3">Favourite Player List <BsFillStarFill /> </h6>
                            {
                                [...Array(12)].map((player) => (
                                <div className="col-md-3 mb-3">
                                    <div className="border rounded p-3">
                                        <div class="avatar avatar-lg me-3 d-flex justify-content-between">
                                            <img src="assets/images/faces/2.jpg" alt="create team" />
                                            <span className="fw-bold m-auto">Player Name</span>
                                            <input type="checkbox" class="form-check-input m-auto" />
                                        </div>
                                    </div>
                                </div>
                                ))
                            }
                        </div>
                        <div className="col-md-12 row m-2 p-2">
                                <button className="btn btn-primary w-25 fw-bold m-auto">Create</button>
                        </div>
                   </div>
               </div>
           </div>
        </div>
    )
}

export default CreateTeam
