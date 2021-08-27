import React, { useState } from "react";
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import MultiSelect from "react-multi-select-component";

const RequestTrainingJoin = ({handleRequestTrainingJoinClose, show}) => {

    const options = [
        { label: "Team 1", value: "grapes", },
        { label: "Team 2", value: "mango" },
        { label: "Oşbo Team", value: "strawberry", disabled: true },
        { label: "Saturday", value: "apple" },
        { label: "Sunday 🍊", value: "tangerine" },
      ];
      const [selected, setSelected] = useState([]);

    return (
        <Modal
            show={show}
            onHide={handleRequestTrainingJoinClose}
            backdrop="static"
            keyboard={false}
            >
            <Modal.Body>
            <h6 className="text-center">Please select team to send join request</h6>
                <div class="avatar">
                    <img src="assets/images/faces/1.jpg" alt="" srcset="" />
                    <span class="avatar-status bg-success"></span>
                </div>
                <h5>Ata Aksoy</h5>
                <MultiSelect
                    options={options}
                    value={selected}
                    onChange={setSelected}
                    labelledBy="Select" className="w-100 m-auto"
                />
                <h6 className="text-center">Select Team</h6>
                <select className="form-control m-2">
                    <option>Team 1</option>
                    <option>Team 2</option>
                    <option>Team 3</option>
                    <option>Team 4</option>
                    <option>Team 5</option>
                </select>
                <h6 className="text-center">You can send note to a player</h6>
                <textarea className="form-control" rows="5" placeholder="Please add note"></textarea>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="danger" onClick={handleRequestTrainingJoinClose}>
                Close
            </Button>
            <Button variant="primary">Send Join Request</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default RequestTrainingJoin
