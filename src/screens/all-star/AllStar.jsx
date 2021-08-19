import React from 'react'
import AllStarCard from '../../components/cards/all-stars/AllStarCard'

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
                    <AllStarCard/>
                ))
            }
            
        </div>
        </>
        
    )
}

export default AllStar
