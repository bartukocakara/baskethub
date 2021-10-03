import React from 'react'
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const RequestJoinTrainingModal = ({handleRequestJoinTrainingModalClose, show}) => {
    return (
        <Modal
            show={show}
            onHide={handleRequestJoinTrainingModalClose}
            backdrop="static"
            keyboard={false}
            >
            <Modal.Header className="court-res-header">
                <Modal.Title>
                <h6 className="text-center">You can send note to training host</h6>
                <div class="avatar me-3">
                    <img src="assets/images/faces/1.jpg" alt="" srcset="" />
                    <span class="avatar-status bg-success"></span>
                </div><h5>Ata Aksoy</h5>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <form>
                <div class="avatar avatar-lg m-4 widget-card-right">
                    <img src="assets/images/faces/2.jpg" alt="" srcset="" />
                    <h6 className="text-center">Please select training you want to ask for join Bartu</h6>
                </div>
                <select className="form-control m-2">
                    <option>Training 1</option>
                    <option>Training 2</option>
                    <option>Training 3</option>
                    <option>Training 4</option>
                    <option>Training 5</option>
                </select>
                <h6 className="text-center">You can send note to a trainer</h6>
                <textarea className="form-control m-2" rows="5">Write here...</textarea>
                <div className="text-center">
                <Button variant="danger m-2" onClick={handleRequestJoinTrainingModalClose}>
                    Close
                </Button>
                <Button variant="warning m-2" onClick={handleRequestJoinTrainingModalClose}>
                    Send Request
                </Button>
                </div>
            </form>
            </Modal.Body>
        </Modal>
    )
}

export default RequestJoinTrainingModal
