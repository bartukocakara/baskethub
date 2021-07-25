import React from 'react'

const CreateCourt = () => {
    return (
        <div>
            <h5 className="text-center">Create Court</h5>
            <div className="card">
                <div className="col-md-10 row m-auto">
                    <div className="form-group col-md-6 p-2">
                        <label for="basicInput" className="p-2">Host Name</label>
                        <input type="text" className="form-control w-75 p-2" id="basicInput" placeholder="Enter name" />
                    </div>
                    <div className="form-group col-md-6 p-2">
                        <label for="basicInput" className="p-2">Host Surname</label>
                        <input type="text" className="form-control w-75 p-2" id="basicInput" placeholder="Enter surname" />
                    </div>
                    <div className="form-group col-md-6 p-2">
                        <label for="basicInput" className="p-2">Host Email</label>
                        <input type="text" className="form-control w-75 p-2" id="basicInput" placeholder="Enter email" />
                    </div>
                    <div className="form-group col-md-6 p-2">
                        <label for="basicInput" className="p-2">Host Phone</label>
                        <input type="text" className="form-control w-75 p-2" id="basicInput" placeholder="Enter phone" />
                    </div>
                    <div className="form-group col-md-6 p-2">
                        <label for="basicInput" className="p-2">Host Gender</label>
                        <select className="form-control w-75 p-2">
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                    </div>
                    <div className="form-group col-md-6 p-2">
                        <label for="basicInput" className="p-2">Court Name</label>
                        <input type="text" className="form-control w-75 p-2" id="basicInput"/>
                    </div>
                    <div className="form-group col-md-6 p-2">
                        <label for="helpInputTo" className="p-2">Price </label>
                        <small className="text-muted"><i> 1 hourly</i></small>
                        <input type="number" className="form-control w-75 p-2" id="helpInputTop" placeholder="100,0₺" />
                    </div>
                    <div className="form-group col-md-6 p-2">
                        <label for="helpInputTo" className="p-2">Price </label>
                        <small className="text-muted"><i> 2 hourly</i></small>
                        <input type="number" className="form-control w-75 p-2" id="helpInputTop" placeholder="200,0₺" />
                    </div>
                    <div className="form-group col-md-6 p-2">
                        <label for="helpInputTo" className="p-2">Monthly Subscription </label>
                        <small className="text-muted"><i>Once a week</i></small>
                        <input type="number" className="form-control w-75 p-2" id="helpInputTop" placeholder="300,0₺" />
                    </div>
                    <div className="form-group col-md-6 p-2">
                        <label for="helpInputTo" className="p-2">Yearly Subscription </label>
                        <small className="text-muted"><i>Once a month</i></small>
                        <input type="number" className="form-control w-75 p-2" id="helpInputTop" placeholder="1200,0₺" />
                    </div>
                    <div className="form-group col-md-6 p-2 m-auto">
                        <label for="helpInputTo" className="p-2">Court Images </label>
                        <input type="file" className="form-control" id="helpInputTop" placeholder="200,0₺" />
                    </div>
                    <div className="form-group col-md-12 p-2 m-auto">
                        <label for="helpInputTo" className="p-2">Address </label>
                        <textarea type="text" className="form-control" placeholder="Enter Address" rows="3"></textarea>
                    </div>
                    <div className="form-group col-md-12 p-2 text-center p-4">
                        <input type="button" className="btn btn-primary btn-lg w-25 fw-bold" id="helpInputTop" value="Create" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateCourt
