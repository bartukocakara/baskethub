import React from 'react'
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { RiTeamLine } from "@react-icons/all-files/ri/RiTeamLine";

const TrainerSearch = ({handleTrainerClose, show}) => {
    return (
        <Modal show={show} onHide={handleTrainerClose}>
            <Modal.Header>
            <RiTeamLine className="sidebar-icon"/>

                <Modal.Title>Trainer Search</Modal.Title>
            </Modal.Header>
            <form action="#">
                <div className="modal-body">
                    <label>Search by Name: </label>
                    <div className="form-group">
                        <input type="text" placeholder="Write Name" className="form-control" />
                    </div>
                </div>
            </form>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleTrainerClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleTrainerClose}>
                    Save Changes
                </Button>
                </Modal.Footer>
        </Modal>
    )
}

export default TrainerSearch
