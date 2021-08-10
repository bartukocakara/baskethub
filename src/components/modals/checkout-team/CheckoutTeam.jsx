import React from 'react'
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const CheckoutTeam = ({show, handleCheckoutTeamClose}) => {
    return (
        <Modal show={show} onHide={handleCheckoutTeamClose} >
            <Modal.Body>
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                    {
                        [...Array(5)].map((teamDetail) => (
                            <>
                                <div class="media d-flex align-items-center">
                                    <div class="avatar me-3">
                                        <img src="assets/images/faces/1.jpg" alt="" srcset="" />
                                        <span class="avatar-status bg-success"></span>
                                    </div>
                                    <div class="name flex-grow-1">
                                        <h6 class="mb-0">Fred</h6>
                                        <span class="text-xs">Online</span>
                                    </div>
                                    <button class="btn btn-sm">
                                        <i data-feather="x"></i>
                                    </button>
                                </div>
                            <hr />
                            </>
                        ))
                    }
                        
                    </div>
                    
                </div>
            </div>
            </Modal.Body>
            {/* <Modal.Footer> */}
                <div className="text-center">
                <Button variant="danger m-2" onClick={handleCheckoutTeamClose}>
                    Close
                </Button>
                <Button variant="warning m-2" onClick={handleCheckoutTeamClose}>
                    Send Request
                </Button>
                </div>
            {/* </Modal.Footer> */}
        </Modal>
    )
}

export default CheckoutTeam
