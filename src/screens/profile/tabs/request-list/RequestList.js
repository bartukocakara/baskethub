import React from 'react'
import { TiInfoLarge } from "@react-icons/all-files/ti/TiInfoLarge";
import {
    Link,
  } from "react-router-dom";
const RequestList = () => {
    return (
        <div class="col-12 col-xl-12">
            <div class="card">
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-hover table-lg">
                            <thead>
                                <tr>
                                    <th className="w-25 text-center">Name</th>
                                    <th className="w-25 text-center">Message</th>
                                    <th className="w-25 text-center">Request Type</th>
                                    <th className="w-25 text-center">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    [...new Array(3)].map((requestItem) => (
                                        <tr>
                                        <td class="col-3">
                                        <div class="d-flex align-items-center">
                                            <div class="avatar avatar-md">
                                                <img src="assets/images/faces/5.jpg" alt="request-1"/>
                                            </div>
                                            <p class="font-bold ms-3 mb-0">Si Cantik</p>
                                        </div>
                                    </td>
                                    <td class="col-auto text-center">
                                        <p class=" mb-0">Congratulations on your graduation!</p>
                                    </td>
                                    <td class="col-auto text-center">
                                        <p class=" mb-0">Match</p>
                                    </td>
                                    <td class="col-auto text-center">
                                        <span className="badge bg-warning">Waiting</span>
                                    </td>
                                    <td>
                                        <Link to="match-request-result" className="btn btn-primary p-1 w-0 h-0">
                                            <TiInfoLarge />
                                        </Link>
                                    </td>
                                    </tr>
                                    ))
                                }
                                <tr>
                                    <td class="col-3">
                                        <div class="d-flex align-items-center">
                                            <div class="avatar avatar-md">
                                                <img src="assets/images/faces/5.jpg" alt="request-1"/>
                                            </div>
                                            <p class="font-bold ms-3 mb-0">Si Cantik</p>
                                        </div>
                                    </td>
                                    <td class="col-auto text-center">
                                        <p class=" mb-0">Congratulations on your graduation!</p>
                                    </td>
                                    <td class="col-auto text-center">
                                        <p class=" mb-0">Add Team</p>
                                    </td>
                                    <td class="col-auto text-center">
                                        <span className="badge bg-warning">Waiting</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="col-3">
                                        <div class="d-flex align-items-center">
                                            <div class="avatar avatar-md">
                                                <img src="assets/images/faces/2.jpg" alt="request-2" />
                                            </div>
                                            <p class="font-bold ms-3 mb-0">Si Ganteng</p>
                                        </div>
                                    </td>
                                    <td class="col-auto text-center">
                                        <p class=" mb-0">Congratulations on your graduation!</p>
                                    </td>
                                    <td class="col-auto text-center">
                                        <p class=" mb-0">Match</p>
                                    </td>
                                    <td class="col-auto text-center">
                                    <span className="badge bg-success">Accepted</span> 
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RequestList
