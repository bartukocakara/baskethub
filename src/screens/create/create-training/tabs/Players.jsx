import React from 'react'

const Players = () => {
    return (
        <div className="container">
            <div className="d-flex justify-content-between">
                <h6 className="text-center">Pick your favourite players you want to train with</h6>
                <input type="text" className="form-control w-25 m-auto" placeholder="Search" />
            </div>
            <div className="players m-3 overflow-x">
            {
                [...Array(5)].map((player) => (
                    <span className="d-inline-block m-2">
                        <div className="card border rounded">
                            <span className="text-center fw-bold">Bartu Kocakara</span>
                            <div className="card-body text-center">
                                <div class="avatar avatar-lg d-flex">
                                    <img src="assets/images/faces/4.jpg" alt="train player" />
                                    <div class="custom-control custom-checkbox m-2">
                                        <input type="checkbox" class="form-check-input form-check-primary" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </span>
                ))
            }
            </div>
        </div>
    )
}

export default Players
