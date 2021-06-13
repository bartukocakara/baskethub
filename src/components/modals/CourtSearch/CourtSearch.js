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
                    <label>City: </label>
                    <div class="form-group">
                        <select class="form-control">
                            <option>İstanbul</option>
                            <option>İzmir</option>
                            <option>Ankara</option>
                        </select>
                    </div>
                    <label>District: </label>
                    <div className="form-group">
                        <select className="form-control">
                            <option>Kadıköy</option>
                            <option>Alsancak</option>
                            <option>Kızılay</option>
                        </select>
                    </div>
                    <label>Tarih: </label>
                    <div className="form-group">
                        <input type="date" className="form-control" />
                    </div>
                    <label>Zaman Aralığı: </label>
                    <div className="form-group">
                        <select className="form-control">
                            <option>00:00 - 01:00</option>
                            <option>01:00 - 02:00</option>
                            <option>02:00 - 03:00</option>
                        </select>
                    </div>
                </div>
            </form>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleCourtClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleCourtClose}>
                    Start Search
                </Button>
                </Modal.Footer>
        </Modal>
        </>
    )
}

export default CourtSearch
