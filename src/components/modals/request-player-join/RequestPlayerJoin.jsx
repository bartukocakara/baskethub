import React from 'react'
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const RequestPlayerJoin = ({handleRequestPlayerJoinClose, show}) => {
    return (
        <Modal show={show} onHide={handleRequestPlayerJoinClose} >
                        
            <form className="p-4">
            <div class="avatar avatar-lg m-4 widget-card-right">
                <img src="assets/images/faces/2.jpg" alt="" srcset="" />
                <h6 className="text-center">Please select match you want to ask for join Bartu</h6>
            </div>
                <select className="form-control m-2">
                    <option>Game 1</option>
                    <option>Game 2</option>
                    <option>Game 3</option>
                    <option>Game 4</option>
                    <option>Game 5</option>
                </select>
                <h6 className="text-center">You can send note to a player</h6>
                <textarea className="form-control m-2" rows="5">Write here...</textarea>
            {/* <Modal.Footer> */}
                <div className="text-center">
                <Button variant="danger m-2" onClick={handleRequestPlayerJoinClose}>
                    Close
                </Button>
                <Button variant="warning m-2" onClick={handleRequestPlayerJoinClose}>
                    Send Request
                </Button>
                </div>
            {/* </Modal.Footer> */}
            </form>
        </Modal>
    )
}

export default RequestPlayerJoin
