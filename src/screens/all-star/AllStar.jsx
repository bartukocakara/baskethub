import React from 'react'
import { Link } from 'react-router-dom'

const AllStar = () => {
    return (
        <>
        <h6 classNameName="text-center screen-title">All star</h6>
        <div className="row">
            <div className="col-12">
                <div className="card">
                    <div className="card-content">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6 mb-4">
                                    <h6 classNameName="text-center">Country</h6>
                                    <fieldset className="form-group">
                                        <select className="form-select" id="basicSelect">
                                            <option>Netherlands</option>
                                            <option>Spain</option>
                                            <option>Germany</option>
                                        </select>
                                    </fieldset>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <h6 classNameName="text-center">City</h6>
                                    <fieldset className="form-group">
                                        <select className="form-select" id="basicSelect">
                                            <option>Amstedam</option>
                                            <option>Barcelona</option>
                                            <option>Berlin</option>
                                        </select>
                                    </fieldset>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            {
                [...Array(5)].map((allStarCard) => (
                    <div className="col-xl-4 col-md-6 col-sm-12">
                        <Link to="all-star-detail">
                        <div className="card">
                            <div className="card-content">
                                <img src="assets/images/samples/basket-salon2.jpg" className="card-img-top img-fluid" style={{ height:"100px" }} alt="singleminded" />
                                <div className="card-body">
                                    
                                    <h6>Amsterdam, <span classNameName="fw-bold">Netherlands</span></h6>
                                    <p className="card-text">
                                        Chocolate sesame snaps apple pie danish cupcake sweet roll jujubes
                                        tiramisu.Gummies
                                        bonbon apple pie fruitcake icing biscuit apple pie jelly-o sweet roll.
                                    </p>
                                </div>
                            </div>
                            
                        </div>
                        </Link>
                    </div>
                ))
            }
            
        </div>
        </>
        
    )
}

export default AllStar
