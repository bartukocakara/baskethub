import React from 'react';
import "./_rateMatchModal.scss";
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { GoPerson } from "@react-icons/all-files/go/GoPerson";
import { AiFillStar } from "@react-icons/all-files/ai/AiFillStar";

const RateMatchModal = ({showRating, handleRatingClose}) => {
    return (
        <Modal show={showRating} onHide={handleRatingClose}>
            <Modal.Header>
                <GoPerson className="sidebar-icon"/>
                <Modal.Title>Rate match</Modal.Title>
            </Modal.Header>
            <form action="#">
                <div className="modal-body">
                    <h6 className="text-center">Hygiene</h6>
                    <div className="d-flex m-4">
                       { [...Array(5)].map((star) => (<AiFillStar/>))}
                    </div>
                    <h6 className="text-center">Slipperiness of the ground</h6>
                    <div className=" m-4 d-flex">
                       { [...Array(5)].map((star) => (<AiFillStar/>))}
                    </div>
                    <h6 className="text-center">Position</h6>
                    <div className=" m-4 d-flex">
                       { [...Array(5)].map((star) => (<AiFillStar/>))}
                    </div>
                    <hr />
                </div>
            </form>
            <div className="text-center">
                <Button variant="secondary m-2" onClick={handleRatingClose}>
                    Close
                </Button>
                <Button variant="warning m-2" onClick={handleRatingClose}>
                    Start search
                </Button>
            </div>
        </Modal>
    )
}

export default RateMatchModal
