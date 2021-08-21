import React from 'react'

const Licence = () => {
    return (
        <div class="card border rounded">
            <div class="card-content">
                <div class="card-body">
                    <form class="form form-vertical">
                        <div class="form-body">
                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <label for="formFile" class="form-label">Default file input
                                        example</label>
                                    <input class="form-control" type="file" id="formFile" />
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label for="formFile" class="form-label">Default file input
                                        example</label>
                                    <input class="form-control" type="file" id="formFile" />
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

export default Licence
