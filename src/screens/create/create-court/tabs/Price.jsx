import React from 'react'

const Price = () => {
    return (
        <>
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
        </>
    )
}

export default Price
