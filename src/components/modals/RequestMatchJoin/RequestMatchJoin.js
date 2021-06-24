import React from 'react'
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import "./_requestMatchJoin.scss";

const RequestMatchJoin = ({handleRequestMatchJoinModalClose, show}) => {
    return (
        <Modal
            show={show}
            onHide={handleRequestMatchJoinModalClose}
            backdrop="static"
            keyboard={false}
            >
            <Modal.Header className="court-res-header">
                <Modal.Title>
                <h6 className="text-center">You can send note to match host</h6>
                <div class="avatar me-3">
                    <img src="assets/images/faces/1.jpg" alt="" srcset="" />
                    <span class="avatar-status bg-success"></span>
                </div><h5>Ata Aksoy</h5>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <h6 className="text-center">You can send note to a player</h6>
            <textarea className="form-control" rows="5" placeholder="Please add note"></textarea>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="danger" onClick={handleRequestMatchJoinModalClose}>
                Close
            </Button>
            <Button variant="primary">Send Join Request</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default RequestMatchJoin
