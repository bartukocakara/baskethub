import React from 'react'
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { RiTeamLine } from "@react-icons/all-files/ri/RiTeamLine";

const TeamSearch = ({handleTeamClose, show}) => {
    return (
        <Modal show={show} onHide={handleTeamClose}>
            <Modal.Header>
            <RiTeamLine className="sidebar-icon"/>

                <Modal.Title>Team Search</Modal.Title>
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
                <Button variant="secondary" onClick={handleTeamClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleTeamClose}>
                    Save Changes
                </Button>
                </Modal.Footer>
        </Modal>
    )
}

export default TeamSearch
