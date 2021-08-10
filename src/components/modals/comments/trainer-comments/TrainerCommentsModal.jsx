import React from 'react'
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const TrainerCommentsModal = ({handleTrainerCommentsModalClose, show}) => {
    return (
        <>
        <Modal show={show} onHide={handleTrainerCommentsModalClose}>
            <Modal.Title className="text-center">Trainer Comments</Modal.Title>
            <Modal.Body>
                <div class="col-12">
                    <div class="card">
                            <div class="table-responsive">
                                <table class="table table-hover table-lg">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Comment</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        
                                        {
                                            [...Array(5)].map((comment) => (
                                            <tr>
                                                <td class="col-3">
                                                    <div class="d-flex align-items-center">
                                                        <div class="avatar avatar-md">
                                                            <img src="assets/images/faces/5.jpg" alt="comment-avatar" />
                                                        </div>
                                                        <p class="font-bold ms-3 mb-0">Si Cantik</p>
                                                    </div>
                                                </td>
                                                <td class="col-auto">
                                                    <p class=" mb-0">Congratulations on your graduation!</p>
                                                </td>
                                            </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                    </div>
                </div>
            </Modal.Body>
            <div className="text-center">
                <Button className="" variant="secondary m-2" onClick={handleTrainerCommentsModalClose}>
                    Close
                </Button>
                <Link to="trainer-comments" variant="warning m-2">
                    See all
                </Link>
            </div>
        </Modal>
        </>
    )
}

export default TrainerCommentsModal
