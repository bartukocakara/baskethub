import React from 'react';
import {
    Link
} from "react-router-dom"

const Trainers = () => {

    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-12 m-2">
                            <input type="search" class="form-control w-25 m-auto text-center" placeholder="Quick search" />
                        </div>
                        <div className="col-md-12 row m-2 p-2">
                            {
                                [...Array(6)].map((player) => (
                                    <Link to="training-video" className="col-md-3 mb-3">
                                        <div className="border rounded p-3">
                                            <div class="avatar avatar-lg me-3 d-flex justify-content-between">
                                                <img src="assets/images/faces/2.jpg" alt="create team" />
                                                <div className="m-auto">
                                                    <span className="fw-bold d-block">Dogi Sarıbaş</span>
                                                    <p>Lorem ipsum dolor sit amet.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
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
                   </div>
               </div>
           </div>
        </div>
    )
}

export default Trainers
