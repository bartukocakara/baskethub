import React from 'react'
import { FaMoneyBillAlt } from "@react-icons/all-files/fa/FaMoneyBillAlt";
import { BsSun } from "@react-icons/all-files/bs/BsSun";

const Prize = () => {
    return (
        <div className="row m-3 p-3">
                <div className="col-6 col-lg-3 col-md-6">
                    <div className="card border rounded">
                        <div className="card-body px-3 py-4-5">
                            <div className="row">
                                <div className="col-md-8 m-auto text-center">
                                    <h6 className="text-success font-bold">1. Team</h6>
                                    <div className="d-flex">
                                        <FaMoneyBillAlt className="mx-2" />
                                        <h6 className="font-extrabold m-auto mb-0">3.000 $</h6>
                                    </div>
                                    <hr/>
                                    <div className="d-flex">
                                        <BsSun className="m-auto mx-2" size={40}/>
                                        <p className="mt-3">Social Basket Team 1st place Badge </p>
                                    </div>
                                    <hr/>
                                    <div className="d-flex">
                                        <i className="bi bi-award mx-2 d-inline"></i>
                                        <span className="d-block">Personal Badge</span> 
                                    </div>                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-lg-3 col-md-6">
                    <div className="card border rounded">
                        <div className="card-body px-3 py-4-5">
                            <div className="row">
                                <div className="col-md-8 m-auto text-center">
                                    <h6 className="text-success font-bold">2. Team</h6>
                                    <div className="d-flex">
                                        <FaMoneyBillAlt className="mx-2" />
                                        <h6 className="font-extrabold m-auto mb-0">1.000 $</h6>
                                    </div>
                                    <hr/>
                                    <div className="d-flex">
                                        <BsSun className="m-auto mx-2" size={40}/>
                                        <p className="mt-3">Social Basket Team 2nd place Badge</p>
                                    </div>
                                    <hr/>
                                    <div className="d-flex">
                                        <i className="bi bi-award mx-2 d-inline"></i>
                                        <span className="d-block">Personal Badge</span> 
                                    </div>                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-lg-3 col-md-6">
                    <div className="card border rounded">
                        <div className="card-body px-3 py-4-5">
                            <div className="row">
                                <div className="col-md-8 m-auto text-center">
                                    <h6 className="text-success font-bold">3. Team</h6>
                                    <div className="d-flex">
                                        <FaMoneyBillAlt className="mx-2" />
                                        <h6 className="font-extrabold m-auto mb-0">300 $</h6>
                                    </div>
                                    <hr/>
                                    <div className="d-flex">
                                        <BsSun className="m-auto mx-2" size={40}/>
                                        <p className="mt-3">Social Basket Team 3nd place Badge</p>
                                    </div>
                                    <hr/>
                                    <div className="d-flex">
                                        <i className="bi bi-award mx-2 d-inline"></i>
                                        <span className="d-block">Personal Badge</span> 
                                    </div>                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-lg-3 col-md-6">
                    <div className="card border rounded">
                        <div className="card-body px-3 py-4-5">
                            <div className="row">
                                <div className="col-md-8 m-auto text-center">
                                    <h6 className="text-success font-bold">4. Team</h6>
                                    <div className="d-flex">
                                        <FaMoneyBillAlt className="mx-2" />
                                        <h6 className="font-extrabold m-auto mb-0">100 $</h6>
                                    </div>
                                    <hr/>
                                    <div className="d-flex">
                                        <BsSun className="m-auto mx-2" size={40} />
                                        <p className="mt-3">Social Basket Team 3nd place Badge</p>
                                    </div>
                                    <hr/>
                                    <div className="d-flex">
                                        <i className="bi bi-award mx-2"></i>
                                        <span className="d-block">Personal Badge</span> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Prize
