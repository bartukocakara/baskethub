import React from 'react'
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { RiTeamLine } from "@react-icons/all-files/ri/RiTeamLine";

const TournamentSearchModal = ({handleTournamentClose, show}) => {
    return (
        <Modal show={show} onHide={handleTournamentClose}>
            <Modal.Header>
            <RiTeamLine className="sidebar-icon"/>

                <Modal.Title>Tournament Search</Modal.Title>
            </Modal.Header>
            <form action="#">
                <div className="modal-body">
                <h6 className="text-center">Search by name</h6>
                    <div className="form-group">
                        <input type="text" placeholder="Write Name" className="form-control" />
                    </div>
                </div>
            </form>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleTournamentClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleTournamentClose}>
                    Start search
                </Button>
                </Modal.Footer>
        </Modal>
    )
}

export default TournamentSearchModal
