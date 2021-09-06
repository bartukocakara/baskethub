import React from 'react'

const Address = () => {
    return (
        <div class="card border rounded">
            <div class="card-content">
                <div class="card-body">
                    <form class="form form-vertical">
                        <div class="form-body">
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label for="first-name-icon">Country</label>
                                        <div class="position-relative">
                                            <select class="form-control" id="">
                                                <option value="">İzmir</option>
                                                <option value="">İstanbul</option>
                                                <option value="">Ankara</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group ">
                                        <label for="first-name-icon">City</label>
                                        <div class="position-relative">
                                            <select class="form-control" id="">
                                                <option value="">İzmir</option>
                                                <option value="">İstanbul</option>
                                                <option value="">Ankara</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label for="first-name-icon">District</label>
                                        <div class="position-relative">
                                            <select class="form-control" id="">
                                                <option value="">İzmir</option>
                                                <option value="">İstanbul</option>
                                                <option value="">Ankara</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-group">
                                        <label for="password-id-icon">Detail</label>
                                        <div class="position-relative">
                                           <textarea class="form-control" name="" id="" cols="3" rows="3"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 text-center">
                                    <button type="reset" class="btn btn-light-secondary me-1 mb-1">Reset</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Address
