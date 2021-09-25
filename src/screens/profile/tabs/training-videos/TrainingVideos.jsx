import React, { useState } from 'react';
import {
    Link
} from "react-router-dom"
import DateRangePicker from '@wojtekmaj/react-daterange-picker';

const TrainingVideos = () => {

    const [value, onChange] = useState([new Date(), new Date()]);

    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-12 row">
                            <div className="form-group col-md-4">
                                <h6>Training Categoy</h6>
                                <select className="form-control">
                                    <option>Dribbling</option>
                                    <option>Condition</option>
                                    <option>Shooting</option>
                                </select>
                            </div>
                            <div className="form-group col-md-4">
                                <h6>Date </h6>
                                <DateRangePicker
                                    className="d-block rounded"
                                    onChange={onChange}
                                    value={value}
                                />
                            </div>
                        </div>
                        <div className="col-md-12 row m-2 p-2">
                            {
                                [...Array(12)].map((player) => (
                                    <Link to="training-video" className="col-md-3 mb-3">
                                        <div className="border rounded p-3">
                                            <div class="w-100 d-flex justify-content-between">
                                                <img className="w-50 rounded" src="assets/images/trainings/video-banner/training-banner.jpg" alt="create team" />
                                                <div className="m-auto">
                                                    <span className="fw-bold d-block">Shooting</span>
                                                    <p>25/12/2021</p>
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

export default TrainingVideos
