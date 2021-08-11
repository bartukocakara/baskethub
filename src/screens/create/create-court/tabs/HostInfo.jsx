import React from 'react'

const HostInfo = () => {
    return (
        <>
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
        </>
    )
}

export default HostInfo
