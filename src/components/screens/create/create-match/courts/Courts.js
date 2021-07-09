import React from 'react'
import {
    Link
  } from "react-router-dom";

const Courts = () => {
    return (
        <>
        
           <div className="p-2 col-12">
                <div className="d-flex mb-1">
                    <div className="d-flex align-items-center w-75">
                        <i data-feather="list" className="cursor-move"></i>
                        <div className="checkbox checkbox-shadow m-1">
                            <input type="checkbox" className="form-check-input" id="checkbox1" />
                        </div>
                        <h6 className="m-2 m-auto"><Link to="court-detail">Bornova Team</Link> <span className="badge bg-primary">100 ₺</span></h6>
                        <p>İstanbul</p>
                    </div>
                    <div className=" d-flex ">
                        <div className="avatar-lg w-25 ml-3 m-auto">
                            <img className="w-100 rounded" src="assets/images/samples/hall.jpg" alt="" srcset="" />
                        </div>
                    </div>
                </div>
            </div>
            <hr /> 
        </>
    )
}

export default Courts
