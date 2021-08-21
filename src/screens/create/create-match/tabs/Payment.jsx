import React from 'react'
import { FcMoneyTransfer } from "@react-icons/all-files/fc/FcMoneyTransfer";

const Payment = () => {
    return (
        <div className="row mt-2">
            <FcMoneyTransfer className="col-md-12" size={50}/>
            <div class="col-4">
                <div class="form-group text-center">
                    <label for="first-name-icon">Pay Option - 1</label>
                </div>
                <select className="form-control m-1" name="" >
                    <option>Bank Card</option>
                    <option>Credit Card</option>
                    <option>Sipay</option>
                </select>
            </div>
            <div class="col-4">
                <div class="form-group text-center">
                    <label for="first-name-icon" >Pay Option - 2</label>
                </div>
                <select className="form-control m-1" name="" >
                    <option>Seperate Payment</option>
                    <option>Only by me</option>
                </select>
            </div>
            <div class="col-4">
                <div class="form-group text-center">
                    <label for="first-name-icon" >Pay Option - 3</label>
                </div>
                <select className="form-control m-1" name="" >
                    <option>Pre-paid</option>,
                    <option>Pay at check-in</option>
                </select>
            </div>
        </div>
    )
}

export default Payment
