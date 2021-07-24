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
            <form action="#" className="m-2 p-2">
                <div className="form-group">
                    <h6 className="text-center">Select Country</h6>
                    <select className="form-control m-2">
                        <option>Germany</option>
                        <option>Netherlands</option>
                        <option>Spain</option>
                        <option>Italy</option>
                        <option>Turkey</option>
                    </select>
                </div>
                <div className="form-group">
                    <h6 className="text-center">Select City</h6>
                    <select className="form-control m-2">
                        <option>Berlin</option>
                        <option>Amsterdam</option>
                        <option>Barcelona</option>
                        <option>Roma</option>
                        <option>Istanbul</option>
                    </select>
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
