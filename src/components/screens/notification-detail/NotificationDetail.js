import React from 'react'

const NotificationDetail = () => {
    return (
        <div class="row">
            <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Match Request</h4>
                        </div>
                        <div class="card-body">
                            <p>Wrap your content with <code>.avatar</code> class and wrap your text in
                                <code>.avatar</code>-content
                                to create a avatar.You have to use inline
                                attributes to set height width of image in default avatar.</p>
                            <div class="avatar bg-primary me-3">
                                <span class="avatar-content"><i class="bi bi-envelope"></i></span>
                            </div>
                            <div class="avatar bg-warning me-3">
                                <span class="avatar-content">AS</span>
                            </div>
                            <div class="avatar bg-warning me-3">
                                <img src="assets/images/faces/1.jpg" alt="" srcset=""/>
                            </div>
                        </div>
                    </div>
        </div>
    )
}

export default NotificationDetail
