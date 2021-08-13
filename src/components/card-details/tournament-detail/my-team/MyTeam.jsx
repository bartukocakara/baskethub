import React from 'react'

const MyTeam = () => {
    return (
        <div class="col-12 col-xl-12 mt-4">
        <div class="card text-center p-1">
            <h6>My Team</h6>
            <div class="card-body p-1">
                <div class="table-responsive">
                    <table class="table table-hover table-lg">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Comment</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="col-3">
                                    <div class="d-flex align-items-center">
                                        <div class="avatar avatar-md">
                                            <img src="assets/images/faces/5.jpg"  alt="my-team"/>
                                        </div>
                                        <p class="font-bold ms-3 mb-0">Si Cantik</p>
                                    </div>
                                </td>
                                <td class="col-auto">
                                    <p class=" mb-0">Congratulations on your graduation!</p>
                                </td>
                            </tr>
                            <tr>
                                <td class="col-3">
                                    <div class="d-flex align-items-center">
                                        <div class="avatar avatar-md">
                                            <img src="assets/images/faces/2.jpg" alt="my-team"/>
                                        </div>
                                        <p class="font-bold ms-3 mb-0">Si Ganteng</p>
                                    </div>
                                </td>
                                <td class="col-auto">
                                    <p class=" mb-0">Wow amazing design! Can you make another
                                        tutorial for
                                        this design?</p>
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

export default MyTeam
