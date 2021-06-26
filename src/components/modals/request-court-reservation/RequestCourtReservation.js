import React from 'react'
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const RequestCourtReservation = ({handleRequestCourtReservationModalClose, show}) => {
    return (
        <Modal
            show={show}
            onHide={handleRequestCourtReservationModalClose}
            backdrop="static"
            keyboard={false}
            >
            <Modal.Header className="court-res-header">
                <Modal.Title>
                <div class="avatar me-3">
                    <img src="assets/images/faces/1.jpg" alt="" srcset="" />
                </div>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <h6 className="text-center">Available date-times of court</h6>
            <table class="table table-hover mb-0">
                <tbody>
                    <tr>
                        <td class="text-bold-500">Michael Right</td>
                        <td>$15/hr</td>
                        <td class="text-bold-500">UI/UX</td>
                        <td>Remote</td>
                        <td>Austin,Taxes</td>
                    </tr>
                    <tr>
                        <td class="text-bold-500">Morgan Vanblum</td>
                        <td>$13/hr</td>
                        <td class="text-bold-500">Graphic concepts</td>
                        <td>Remote</td>
                        <td>Shangai,China</td>
                    </tr>
                    <tr>
                        <td class="text-bold-500">Tiffani Blogz</td>
                        <td>$15/hr</td>
                        <td class="text-bold-500">Animation</td>
                        <td>Remote</td>
                        <td>Austin,Texas</td>
                    </tr>
                    <tr>
                        <td class="text-bold-500">Ashley Boul</td>
                        <td>$15/hr</td>
                        <td class="text-bold-500">Animation</td>
                        <td>Remote</td>
                        <td>Austin,Texas</td>
                    </tr>
                    <tr>
                        <td class="text-bold-500">Mikkey Mice</td>
                        <td>$15/hr</td>
                        <td class="text-bold-500">Animation</td>
                        <td>Remote</td>
                        <td>Austin,Texas</td>
                    </tr>
                </tbody>
            </table>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="danger" onClick={handleRequestCourtReservationModalClose}>
                Close
            </Button>
            <Button variant="primary">Send Join Request</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default RequestCourtReservation
