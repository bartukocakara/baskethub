const Payment = () => {
    return (
        <div className="row">
            {/* Court fee all-day 6*100 */}

            {/* Referee fee */}

            {/* Camera fee */}

            {/* Organization fee */}

            {/* Payment type */}

            {/* Seperate payment */}

            <div className="col-md-6 my-2">
                <h6 className="text-center">Court fee</h6>
                <input type="number" className="form-control" placeholder="00,00" />
            </div>
            <div className="col-md-6 my-2">
                <h6 className="text-center">Referee fee</h6>
                <input type="number" className="form-control" placeholder="00,00" />
            </div>
            <div className="col-md-6 my-2">
                <h6 className="text-center">Referee fee</h6>
                <input type="number" className="form-control" placeholder="00,00" />
            </div>
            <div className="col-md-6 my-2">
                <h6 className="text-center">Payment Type</h6>
                <select className="form-control">
                    <option value="">Credit Card</option>
                    <option value="">Sipay</option>
                    <option value="">Iyzico</option>
                </select>
            </div>
        </div>
    )
}

export default Payment
