import React from 'react'
import { Link } from 'react-router-dom'

const Courts = () => {
    return (
        <>
            <h6 className="text-center">Court availability results searched by "DATE"</h6>
            <div className="players m-3 overflow-x">

            {
                [...Array(5)].map((player) => (
                    <span className="w-50 d-inline-block m-2">
                        <div className="card border rounded text-center">
                            <Link to="court-detail"><span className="text-center fw-bold">Bornova Spor Salonu</span></Link>
                            <div className="card-body text-center">
                            <div>
                                <img className="w-100 rounded" src="assets/images/samples/basket-salon3.jpg" alt="train player" />
                            </div>
                        </div>
                        </div>
                    </span>
                ))
            }
            </div>
        </>
    )
}

export default Courts
