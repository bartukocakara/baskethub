import React from 'react'

const Subscription = () => {
    return (
        <>
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
        </>
    )
}

export default Subscription
