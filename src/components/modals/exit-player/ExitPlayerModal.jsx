import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import MultiSelect from "react-multi-select-component";

const ExitPlayerModal = ({handleExitPlayerModalClose, show}) => {

    const options = [
        { label: "Player 1", value: "grapes", },
        { label: "Player 2", value: "mango" },
        { label: "Player 3", value: "strawberry", disabled: true },
        { label: "Player 4", value: "apple" },
        { label: "Player 5 🍊", value: "tangerine" },
      ];
    const [selected, setSelected] = useState([]);

    return (
        <>
        <Modal show={show} onHide={handleExitPlayerModalClose}>
            <Modal.Body>
                <div class="col-12">
                    <div class="card m-3 p-2">
                        <h6 className="text-center">Please select which player you want to exit ?</h6>
                    </div>
                </div>
            </Modal.Body>
            <div className="text-center">
                <div className="form-group p-2 m-2">
                    <MultiSelect
                        options={options}
                        value={selected}
                        onChange={setSelected}
                        labelledBy="Select" className="w-100 m-auto"
                    />
                </div>
                <Button className="" variant="secondary m-2" onClick={handleExitPlayerModalClose}>
                    Close
                </Button>
                <Button className="" variant="danger m-2">
                    Yes
                </Button>
            </div>
        </Modal>
        </>
    )
}

export default ExitPlayerModal
