import React from 'react'

const MyTeamDetail = () => {
    return (
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                    {
                        [...Array(5)].map((teamDetail) => (
                            <div class="media d-flex align-items-center">
                                <div class="avatar me-3">
                                    <img src="assets/images/faces/1.jpg" alt="" srcset="" />
                                    <span class="avatar-status bg-success"></span>
                                </div>
                                <div class="name flex-grow-1">
                                    <h6 class="mb-0">Fred</h6>
                                    <span class="text-xs">Online</span>
                                </div>
                                <button class="btn btn-sm">
                                    <i data-feather="x"></i>
                                </button>
                            </div>
                        ))
                    }
                        
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default MyTeamDetail
