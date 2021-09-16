import React from 'react'

const TrainingItems = () => {
    return (
        <div class="card-content">
            <div class="card-body  ">
                <div class=" row">
                    {
                        [...Array(12)].map((player) => (
                        <div className="col-md-3 mb-3">
                            <div className="border rounded p-3 card-shadow">
                                <div class="avatar avatar-lg me-3 d-flex justify-content-between">
                                    <img src="assets/images/trainings/training-items/agility-ladder.jpg" alt="create team" />
                                    <div className="m-auto">
                                        <span className="fw-bold d-block">Agility Ladder</span>
                                        <label>Quickness</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default TrainingItems
