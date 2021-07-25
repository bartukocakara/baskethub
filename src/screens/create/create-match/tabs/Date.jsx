import React from 'react'
import { FcCalendar } from "@react-icons/all-files/fc/FcCalendar";

const Date = () => {
    return (
        <div className="row">
            <FcCalendar className="col-md-12" size={50}/>
            <div className="col-6">
                <div className="form-group text-center">
                    <label for="first-name-icon" className="m-2">Date</label>
                </div>
                <input type="date" className="form-control m-2" />
            </div>
            <div className="col-3 mt-3">
                <div class="form-group text-center">
                    <label for="first-name-icon">Start</label>
                </div>
                <input type="time" className="form-control m-2" />
            </div>
            <div className="col-3 mt-3">
                <div className="form-group text-center">
                    <label for="first-name-icon">End</label>
                </div>
                <input type="time" className="form-control m-2" />
            </div>
        </div>
    )
}

export default Date
