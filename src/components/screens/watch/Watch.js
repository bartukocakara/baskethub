import React from 'react'

const Watch = () => {
    return (
        <>
        <h5 className="text-center">Watch</h5>
        <div className="row p-4">
            <div className="col-md-4 text-center">
                <h6 >City</h6>
                <select className="form-control">
                    <option>X</option>
                    <option>Y</option>
                    <option>Z</option>
                </select>
            </div>
            <div className="col-md-4 text-center">
                <h6>Court Name</h6>
                <select className="form-control">
                    <option>X</option>
                    <option>Y</option>
                    <option>Z</option>
                </select>            
            </div>
            <div className="col-md-4 text-center">
                <h6 >Date</h6>
                <select className="form-control">
                    <option>X</option>
                    <option>Y</option>
                    <option>Z</option>
                </select>            </div>
        </div>
        <iframe className="mt-4" width="350" height="315"
            src="https://www.youtube.com/embed/tgbNymZ7vqY" title="youtube">
            </iframe>
        </>
    )
}

export default Watch
