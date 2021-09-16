import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { FiLogOut } from "@react-icons/all-files/fi/FiLogOut";

const QuitTeamModal = ({handleQuitTeamModalClose, show}) => {

    return (
        <>
        <Modal show={show} onHide={handleQuitTeamModalClose}>
            <Modal.Body>
                <div class="col-12">
                    <div class="card m-3">
                        <FiLogOut className="bg-danger text-light p-1 rounded" size={30}/>
                        <h6 className="text-center">Quit Team</h6>
                    </div>
                </div>
            </Modal.Body>
            <div className="text-center">
                <div className="form-group p-2 m-2">
                    <h6 className="text-center">Please confirm if you want to quit from Bornova Team.</h6>

                </div>
                <Button className="" variant="secondary m-2" onClick={handleQuitTeamModalClose}>
                    Close
                </Button>
                <Button className="" variant="danger m-2">
                    Confirm
                </Button>
            </div>
        </Modal>
        </>
    )
}

export default QuitTeamModal
