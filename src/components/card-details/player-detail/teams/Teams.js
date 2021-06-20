import React from 'react'
import { HiCheck } from "@react-icons/all-files/hi/HiCheck";

const Teams = () => {
    return (
            <div className="col-3">
                <div className="card bg-primary">
                    <div className="card-body px-3 py-4-5 profile-widget">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="stats-icon green">
                                <HiCheck style={{ color:"#fff", fontSize:"30px", }}/>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <h6 className=" text-light">Match Accepted</h6>
                                <h6 className="font-extrabold mb-0 text-light">112</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
    )
}

export default Teams
