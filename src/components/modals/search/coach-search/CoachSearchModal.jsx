import React from 'react'
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { GoPerson } from "@react-icons/all-files/go/GoPerson";

const CoachSearchModal = ({handleCoachClose, show}) => {
    return (
        <Modal show={show} onHide={handleCoachClose}>
            <Modal.Header>
                <GoPerson className="sidebar-icon"/>
                <Modal.Title>Coach Search</Modal.Title>
            </Modal.Header>
            <form action="#">
                <div className="modal-body">
                    <h6>Search by Name: </h6>
                    <div className="form-group">
                        <input type="text" placeholder="Write Name" className="form-control" />
                    </div>
                    <hr />
                    <h6 className="text-center">City</h6>
                    <div className="form-group">
                        <select class="form-control">
                            <option>İstanbul</option>
                            <option>İzmir</option>
                            <option>Ankara</option>
                        </select>
                    </div>
                    <h6 className="text-center">District</h6>
                    <div className="form-group">
                        <select className="form-control">
                            <option>Kadıköy</option>
                            <option>Alsancak</option>
                            <option>Kızılay</option>
                        </select>
                    </div>
                    <h6 className="text-center">Date</h6>
                    <div className="form-group">
                        <input type="date" className="form-control" />
                    </div>
                    <h6 className="text-center">Time interval</h6>
                    <div className="form-group">
                        <select className="form-control">
                            <option>00:00 - 01:00</option>
                            <option>01:00 - 02:00</option>
                            <option>02:00 - 03:00</option>
                        </select>
                    </div>
                </div>
            </form>
            <div className="text-center">
                <Button variant="secondary m-2" onClick={handleCoachClose}>
                    Close
                </Button>
                <Button variant="warning m-2" onClick={handleCoachClose}>
                    Start search
                </Button>
            </div>
        </Modal>
    )
}

export default CoachSearchModal
