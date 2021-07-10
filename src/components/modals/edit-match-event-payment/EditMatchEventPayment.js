import React from 'react'
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { FcMoneyTransfer } from "@react-icons/all-files/fc/FcMoneyTransfer";

const EditMatchEventPayment = ({handleEditPaymentClose, show}) => {
    return (
        <Modal show={show} onHide={handleEditPaymentClose}>
            <Modal.Header >
                <Modal.Title>Edit Payment Types</Modal.Title>
            </Modal.Header>
            <FcMoneyTransfer className="col-md-12 m-2" size={50}/>

            <form action="#">
                <div class="col-9 m-auto">
                    <div class="form-group text-center">
                        <label for="first-name-icon">Pay Option - 1</label>
                    </div>
                    <select className="form-control m-1" name="" >
                        <option>Bank Card</option>
                        <option>Credit Card</option>
                        <option>Sipay</option>
                    </select>
                </div>
                <div class="col-9 m-auto">
                    <div class="form-group text-center">
                        <label for="first-name-icon" >Pay Option - 2</label>
                    </div>
                    <select className="form-control m-1" name="" >
                        <option>Seperate Payment</option>
                        <option>Only by me</option>
                    </select>
                </div>
                <div class="col-9 m-auto">
                    <div class="form-group text-center">
                        <label for="first-name-icon" >Pay Option - 3</label>
                    </div>
                    <select className="form-control m-1" name="" >
                        <option>Pre-paid</option>,
                        <option>Pay at check-in</option>
                    </select>
                </div>
            </form>
            <div className="text-center">
                <Button variant="secondary m-2" onClick={handleEditPaymentClose}>
                    Close
                </Button>
                <Button variant="primary m-2" onClick={handleEditPaymentClose}>
                    Save changes
                </Button>
            </div>
        </Modal>
    )
}

export default EditMatchEventPayment
