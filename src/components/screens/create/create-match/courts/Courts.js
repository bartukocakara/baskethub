import React from 'react'
import {
    Link
  } from "react-router-dom";

const Courts = () => {
    return (
        <>
           <div className="p-1 col-12 create-match-court">
                <div className="d-flex ">
                    <div className="d-flex align-items-center w-75">
                        <i data-feather="list" className="cursor-move"></i>
                        <div className="checkbox checkbox-shadow m-1 m-auto">
                            <input type="checkbox" className="form-check-input" id="checkbox1" />
                        </div>
                        <h6 className="m-2 m-auto"><Link to="court-detail">Bornova Spor Salonu</Link> <p>İstanbul</p></h6>
                        
                    </div>
                    <div className=" d-flex ">
                        <div className="avatar-lg w-25 ml-3 m-auto">
                            <img className="w-100 rounded" src="assets/images/samples/hall.jpg" alt="" srcset="" />
                        </div>
                        <span className="badge bg-primary h-50">100 ₺</span>
                    </div>
                </div>
            </div>
            <hr /> 
        </>
    )
}

export default Courts
