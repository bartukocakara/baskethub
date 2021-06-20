import React from 'react'
import MessageWidgetCard from '../../../cards/widget-cards/message-widget-card/MessageWidgetCard'

const MessageWidget = () => {
    return (
        <div className="col-4">
            <div class="card w-100" >
                <div class="card-header widget-header">
                    <h4>Recommended Players</h4>
                </div>
                <MessageWidgetCard />
                <MessageWidgetCard />
                <MessageWidgetCard />
            </div>
        </div>
    )
}

export default MessageWidget
