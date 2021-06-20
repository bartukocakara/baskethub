import React from 'react'
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const RequestPlayerJoin = ({handleRequestPlayerJoinClose, show}) => {
    return (
        <Modal show={show} onHide={handleRequestPlayerJoinClose} >
            <form className="p-4">
                <label>Please select match</label>
                <select className="form-control m-2">
                    <option>Game 1</option>
                    <option>Game 2</option>
                    <option>Game 3</option>
                    <option>Game 4</option>
                    <option>Game 5</option>
                </select>
            <Modal.Footer>
                <Button variant="danger" onClick={handleRequestPlayerJoinClose}>
                    Close
                </Button>
                <Button variant="warning" onClick={handleRequestPlayerJoinClose}>
                    Send Request
                </Button>
            </Modal.Footer>
            </form>
        </Modal>
    )
}

export default RequestPlayerJoin
