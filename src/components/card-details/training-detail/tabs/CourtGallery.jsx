import React from 'react'

const CourtGallery = () => {
    return (
        <div class="card-content">
            <div class="card-body">
                <div class="list-group">
                    {
                        [...Array(5)].map((CourtGallery) => (
                        <span class="list-group-item list-group-item-action m-1 shadow">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1">List group item heading</h5>
                                <small>3 days ago</small>
                            </div>
                            <p class="mb-1">
                                Donec id elit non mi porta gravida at eget metus. Maecenas sed
                                diam eget risus varius blandit.
                            </p>
                            <small>Donec id elit non mi porta.</small>
                        </span>
                        ))
                    }
                    
                   
                </div>
            </div>
        </div>
    )
}

export default CourtGallery
