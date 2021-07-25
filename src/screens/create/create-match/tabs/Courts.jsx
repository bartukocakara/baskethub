import React from 'react'

import { GoLocation } from "@react-icons/all-files/go/GoLocation";
import { GiPayMoney } from "@react-icons/all-files/gi/GiPayMoney";
import { AiFillStar } from "@react-icons/all-files/ai/AiFillStar";
import { BiWorld } from "@react-icons/all-files/bi/BiWorld";

import {
    Link
  } from "react-router-dom";
const Courts = () => {
    return (
        <>
          <div className="card-body text-center row">
                <div className="col-md-3"></div>
                <h6 className="text-center p-3 m-auto col-md-3">Court Search </h6>
                <div class="form-group position-relative col-md-4 has-icon-right d-inline 100">
                    <input type="text" class="form-control p-2" placeholder="Quick search..." />
                    <div class="form-control-icon">
                        <i class="bi bi-search m-3"></i>
                    </div>
                </div>
                <div className="header form m-2 p-3">
                    <form className="row">
                        <div className="col-md-6 text-center">
                            <BiWorld size={20} className="m-2 text-primary"/>
                            <select className="form-control w-50 m-auto">
                                <option>Netherlands</option>
                                <option>Germany</option>
                                <option>Turkey</option>
                            </select>
                        </div>
                        <div className="col-md-6 text-center">
                            <GoLocation size={20} className="m-2 text-primary"/>
                            <select className="form-control w-50 m-auto">
                                <option>Amsterdam</option>
                                <option>Berlin</option>
                                <option>İzmir</option>
                            </select>
                        </div>
                        <div className="col-md-6 text-center">
                            <GiPayMoney size={20} className="m-2 text-primary"/>
                            <select className="form-control w-75 m-auto">
                                <option>75-100 ₺</option>
                                <option>100-125 ₺</option>
                                <option>125-150 ₺</option>
                            </select>
                        </div>
                        <div className="col-md-6 text-center">
                            <AiFillStar className="m-2 text-primary"/>
                            <select className="form-control w-75 m-auto" name="" >
                                <option>1 Star</option>,
                                <option>2 Star</option>
                                <option>3 Star</option>
                                <option>4 Star</option>
                                <option>5 Star</option>
                            </select>
                            
                        </div>
                    </form>
                </div>
                <div className="list-select m-2 w-75 m-auto border rounded"  id="widget-todo-list">
                    {
                        [...Array(5)].map((player) => (
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
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Courts
