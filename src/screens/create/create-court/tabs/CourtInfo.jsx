import React from 'react'

const CourtInfo = () => {
    return (
        <>
            <div className="form-group col-md-6 p-2">
                <label for="basicInput" className="p-2">Court Name</label>
                <input type="text" className="form-control w-75 p-2" id="basicInput"/>
            </div>
            <div className="form-group col-md-12 p-2 m-auto">
                <label for="helpInputTo" className="p-2">Address </label>
                <textarea type="text" className="form-control" placeholder="Enter Address" rows="3"></textarea>
            </div>
        </>
    )
}

export default CourtInfo
