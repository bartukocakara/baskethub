import React from 'react'
import MessageWidgetCard from '../../../cards/widget-cards/message-widget-card/MessageWidgetCard'
import "./_messageWidget.scss";

const MessageWidget = () => {
    return (
        <div className="col-md-4">
            <div class="card player-messages-widget w-100" >
                <h4 className="text-center m-2">Messages</h4>
                <div className="card-player-messages">
                {
                    [...Array(5)].map((match) => (
                        <MessageWidgetCard />
                        ))
                }
                </div>
            </div>
        </div>
    )
}

export default MessageWidget
