import React from 'react'
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const Confirm = ({handleConfirmClose, show}) => {
    return (
        <>
        <Modal show={show} onHide={handleConfirmClose}>
            <Modal.Body>
                <div class="col-12">
                    <div class="card m-3 p-2">
                        <h5 className="text-center">Your are going to join this match. Are you sure ?</h5>
                    </div>
                </div>
            </Modal.Body>
            <div className="text-center">
                <Button className="" variant="secondary m-2" onClick={handleConfirmClose}>
                    Close
                </Button>
                <Button className="" variant="primary m-2">
                    Yes
                </Button>
            </div>
        </Modal>
        </>
    )
}

export default Confirm
