import React from 'react'
import { RiCoupon3Line } from "@react-icons/all-files/ri/RiCoupon3Line";

const Coupon = () => {
    return (
        <div className="row">
            <div className="col-md-12 text-center">
                <RiCoupon3Line size={50} className="text-primary"/>
            </div>
            <div className="col-md-6 m-auto text-center mt-3">
                <label>Coupon code :</label>
                <div className="d-flex m-2">
                    <input type="text" className="form-control w-100" />
                </div>
            </div>
        </div>
    )
}

export default Coupon
