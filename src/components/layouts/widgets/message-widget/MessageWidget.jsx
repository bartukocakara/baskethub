import { BsArrowRight } from '@react-icons/all-files/bs/BsArrowRight';
import React from 'react'
import { Link } from 'react-router-dom';
import MessageWidgetCard from '../../../cards/widget-cards/message-widget-card/MessageWidgetCard'
import "./_messageWidget.scss";

const MessageWidget = () => {
    return (
        <div className="col-md-4">
            <div class="card player-messages-widget w-100 mb-1" >
                <h5 className="text-center m-2">Messages</h5>
                <div className="card-player-messages">
                {
                    [...Array(5)].map((match) => (
                        <MessageWidgetCard />
                        ))
                }
                </div>
            </div>
            <h6 className="text-center">
                <Link className="btn btn-primary">See more <BsArrowRight/></Link>
            </h6>
        </div>
    )
}

export default MessageWidget
