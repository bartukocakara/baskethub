import React from 'react'
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const CancelMatchModal = ({handleCancelMatchModalClose, show}) => {
    return (
        <>
        <Modal show={show} onHide={handleCancelMatchModalClose}>
            <Modal.Body>
                <div class="col-12">
                    <div class="card m-3 p-2">
                        <h6 className="text-center">Your are going to cancel this match. Are you sure ?</h6>
                    </div>
                </div>
            </Modal.Body>
            <div className="text-center">
                <Button className="" variant="secondary m-2" onClick={handleCancelMatchModalClose}>
                    Close
                </Button>
                <Button className="" variant="danger m-2">
                    Yes
                </Button>
            </div>
        </Modal>
        </>
    )
}

export default CancelMatchModal
