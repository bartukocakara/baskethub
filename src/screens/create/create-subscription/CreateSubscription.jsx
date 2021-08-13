import React from 'react'

const CreateSubscription = () => {
    return (
        <div class="row">
                        <div class="col-md-12">
                            <div class="card">
                                <div class="card-header">
                                    <h4 class="card-title">Create Subscription</h4>
                                </div>

                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group row align-items-center">
                                                <div class="col-lg-4 col-4">
                                                    <label class="col-form-label">First Name</label>
                                                </div>
                                                <div class="col-lg-10 col-8">
                                                    <input type="text" id="first-name" class="form-control" name="fname" placeholder="First Name" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group row align-items-center">
                                                <div class="col-lg-4 col-4">
                                                    <label class="col-form-label">Last Name</label>
                                                </div>
                                                <div class="col-lg-10 col-8">
                                                    <input type="text" id="last-name" class="form-control" name="fname" placeholder="Last Name" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    )
}

export default CreateSubscription
