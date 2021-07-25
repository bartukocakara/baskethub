import React from 'react'

const AllStar = () => {
    return (
        <>
        <h6 className="text-center">All star</h6>
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-content">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-6 mb-4">
                                    <h6 className="text-center">Country</h6>
                                    <fieldset class="form-group">
                                        <select class="form-select" id="basicSelect">
                                            <option>Netherlands</option>
                                            <option>Spain</option>
                                            <option>Germany</option>
                                        </select>
                                    </fieldset>
                                </div>
                                <div class="col-md-6 mb-4">
                                    <h6 className="text-center">City</h6>
                                    <fieldset class="form-group">
                                        <select class="form-select" id="basicSelect">
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
        </>
        
    )
}

export default AllStar
