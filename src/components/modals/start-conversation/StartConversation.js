import React from 'react'
import React from 'react'
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const StartConversation = ({handlStartConversationModalClose, showStartConversation}) => {
    return (
        <Modal
            show={show}
            onHide={handlStartConversationModalClose}
            backdrop="static"
            keyboard={false}
            >
            <Modal.Header className="court-res-header">
                <Modal.Title>
                <h5>Select where you want to share</h5>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ul>
                    <li className="share-li whatsapp">
                        <h6> Whatsapp <AiOutlineWhatsApp /></h6>
                    </li>
                    <li className="share-li facebook">
                        <h6> Facebook <TiSocialFacebook /></h6>
                    </li>
                    <li className="share-li twitter">
                        <h6> Twitter <TiSocialTwitter /></h6>
                    </li>
                    <li className="share-li instagram">
                        <h6> Instagram <TiSocialInstagram /></h6>
                    </li>
                </ul>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="danger" onClick={handlStartConversationModalClose}>
                Close
            </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default StartConversation
