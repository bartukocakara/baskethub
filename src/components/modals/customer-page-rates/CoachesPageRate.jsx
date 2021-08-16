import React from 'react';
import "./_rateMatchModal.scss";
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { GoPerson } from "@react-icons/all-files/go/GoPerson";
import { AiFillStar } from "@react-icons/all-files/ai/AiFillStar";

const CoachesPageRate = ({showRating, handleRatingClose}) => {
    return (
        <Modal show={showRating} onHide={handleRatingClose}>
            <Modal.Header>
                <GoPerson className="sidebar-icon"/>
                <Modal.Title>Rate match</Modal.Title>
            </Modal.Header>
            <form class="form" method="post">
                <div class="form-body">
                    <div class="form-group">
                        <label for="feedback1" class="sr-only">Name</label>
                        <input type="text" id="feedback1" class="form-control" placeholder="Name" name="name" />
                    </div>
                    <div class="form-group">
                        <label for="feedback4" class="sr-only">Last Game</label>
                        <input type="text" id="feedback4" class="form-control" placeholder="Last Name" name="LastName" />
                    </div>
                    <div class="form-group">
                        <label for="feedback2" class="sr-only">Email</label>
                        <input type="email" id="feedback2" class="form-control" placeholder="Email" name="email" />
                    </div>
                    <div class="form-group">
                        <select name="reason" class="form-control">
                            <option value="Inquiry">Inquiry</option>
                            <option value="Complain">complaints</option>
                            <option value="Quotation">Quotation</option>
                        </select>
                    </div>
                    <div class="form-group form-label-group">
                        <textarea class="form-control" id="label-textarea" rows="3" placeholder="Suggestion"></textarea>
                        <label for="label-textarea"></label>
                    </div>
                </div>
                <div class="form-actions d-flex justify-content-end">
                    <button type="submit" class="btn btn-primary me-1">Submit</button>
                    <button type="reset" class="btn btn-light-primary">Cancel</button>
                </div>
            </form>
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
            <div className="text-center">
                <Button variant="secondary m-2" onClick={handleRatingClose}>
                    Close
                </Button>
                <Button variant="success m-2" onClick={handleRatingClose}>
                    Save rating
                </Button>
            </div>
        </Modal>
    )
}

export default CoachesPageRate
