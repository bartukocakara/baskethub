import React from 'react'

const Notes = () => {
    return (
        <div class="col-12 mt-3">
            <div class="form-group text-center">
                <label className="w-50 fw-bold text-primary">You can write some note for this event:</label>
            </div>
            <textarea className="form-control" rows="3" placeholder="Write something..."></textarea>
        </div>
    )
}

export default Notes
