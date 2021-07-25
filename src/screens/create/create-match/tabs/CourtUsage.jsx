import React from 'react'
import { FcInfo } from "@react-icons/all-files/fc/FcInfo";

const CourtUsage = () => {
    return (
        <div className="row">
            <div className="col-md-12 text-center">
                <img className="court-field margin-auto" src="assets/images/logo/basketball-court.svg" alt="court-field"/>
            </div>
            <div className="col-md-6 m-auto text-center mt-3 mb-3">
                <div className="d-flex m-2">
                    <h6 className="m-auto m-2">Field use<FcInfo size={25}/></h6>
                </div>
                <select className="form-control fw-bold">
                    <option>Full Court</option>
                    <option>Half Court</option>
                </select>
            </div>
        </div>
    )
}

export default CourtUsage
