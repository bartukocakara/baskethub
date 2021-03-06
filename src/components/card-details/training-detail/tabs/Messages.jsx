import {
    Link
  } from "react-router-dom";
const Messages = () => {
    return (
            <div>
                <div class="col-8 m-auto border mt-4 rounded">
                    <div class="card">
                        <div class="card-header">
                            <div class="media d-flex align-items-center">
                                <div class="avatar me-3">
                                    <Link to="my-profile"><img src="assets/images/faces/1.jpg" alt="" srcset="" /></Link>
                                    <span class="avatar-status bg-success"></span>
                                </div>
                                <div class="name flex-grow-1">
                                    <h6 class="mb-0">Fred</h6>
                                    <span class="text-xs">Online</span>
                                </div>
                                    <button class="btn btn-sm">
                                        <i data-feather="x"></i>
                                    </button>
                                </div>
                            </div>
                            <div class="card-body pt-4 bg-grey">
                                <div class="chat-content">
                                    <div class="chat">
                                        <div class="chat-body">
                                            <div class="chat-message">Hi Alfy, how can i help you?</div>
                                        </div>
                                    </div>
                                    <div class="chat chat-left">
                                        <div class="chat-body">
                                            <div class="chat-message">I'm looking for the best admin dashboard
                                                template</div>
                                            <div class="chat-message">With bootstrap certainly</div>
                                        </div>
                                    </div>
                                    <div class="chat">
                                    <div class="chat-body">
                                        <div class="chat-message">I recommend you to use Mazer Dashboard</div>
                                    </div>
                                </div>
                                <div class="chat chat-left">
                                <div class="chat-body">
                                    <div class="chat-message">That"s great! I like it so much :)</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer">
                        <div class="message-form d-flex flex-direction-column align-items-center">
                            <a href="http://" class="black"><i data-feather="smile"></i></a>
                            <div class="d-flex flex-grow-1 ml-4">
                                <input type="text" class="form-control" placeholder="Type your message.." />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Messages
