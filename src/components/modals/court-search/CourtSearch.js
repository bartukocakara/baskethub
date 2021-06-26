import React from 'react'
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { GiBasketballBasket } from "@react-icons/all-files/gi/GiBasketballBasket";

const CourtSearch = ({handleCourtClose, show}) => {
    return (
        <>
        <Modal show={show} onHide={handleCourtClose}>
            <Modal.Header>
                <GiBasketballBasket />
                <Modal.Title>Court Search</Modal.Title>
            </Modal.Header>
            <form action="#">
                <div class="modal-body">
                <h6 className="text-center">City</h6>
                    <div class="form-group">
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
                <Button className="" variant="secondary m-2" onClick={handleCourtClose}>
                    Close
                </Button>
                <Button className="" variant="warning m-2" onClick={handleCourtClose}>
                    Start search
                </Button>
            </div>
        </Modal>
        </>
    )
}

export default CourtSearch
