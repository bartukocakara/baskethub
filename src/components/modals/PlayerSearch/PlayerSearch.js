import React from 'react'
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { GoPerson } from "@react-icons/all-files/go/GoPerson";

const PlayerSearch = ({handlePlayerClose, show}) => {
    return (
        <Modal show={show} onHide={handlePlayerClose}>
            <Modal.Header>
                <GoPerson className="sidebar-icon"/>
                <Modal.Title>Player Search</Modal.Title>
            </Modal.Header>
            <form action="#">
                <div className="modal-body">
                    <h6>Search by Name: </h6>
                    <div className="form-group">
                        <input type="text" placeholder="Write Name" className="form-control" />
                    </div>
                    <hr />
                    <h6>Location</h6>
                    <label>City: </label>
                    <div className="form-group">
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
                    <label>Position: </label>
                    <div className="form-group">
                        <select className="form-control">
                            <option>PointGuard</option>
                            <option>ShootingGuard</option>
                            <option>SmallForward</option>
                            <option>PowerForward</option>
                            <option>Center</option>
                        </select>
                    </div>
                    <hr />
                    <h6>Availability Times of Player</h6>
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
                <Button variant="secondary" onClick={handlePlayerClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handlePlayerClose}>
                    Start Search
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default PlayerSearch
