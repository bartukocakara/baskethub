import React from 'react'
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { RiTeamLine } from "@react-icons/all-files/ri/RiTeamLine";

const TeamSearchModal = ({handleTeamClose, show}) => {
    return (
        <Modal show={show} onHide={handleTeamClose}>
            <Modal.Header>
            <RiTeamLine className="sidebar-icon"/>

                <Modal.Title>Team Search</Modal.Title>
            </Modal.Header>
            <form action="#">
                <div className="modal-body">
                <h6 className="text-center">Search by Name : </h6>
                    <div className="form-group">
                        <input type="text" placeholder="Write Name" className="form-control" />
                    </div>
                </div>
            </form>
            <div className="text-center">
                <Button variant="secondary m-2" onClick={handleTeamClose}>
                    Close
                </Button>
                <Button variant="warning m-2" onClick={handleTeamClose}>
                    Start search
                </Button>
            </div>
        </Modal>
    )
}

export default TeamSearchModal
