import React from 'react'
import { GiBasketballBasket } from "@react-icons/all-files/gi/GiBasketballBasket";


const TraininigTypes = () => {
    return (
        <div class="card-content">
            <div class="card-body w-100 text-center">
                <div class="list-group ">
                    {
                        [...Array(5)].map((TraininigTypes) => (
                        <span class="list-group-item w-50 list-group-item-action my-2 shadow m-auto">
                            <div class="d-flex w-100 justify-content-between">
                                <GiBasketballBasket size={25}/>
                                <h5 class="mb-1">Shooting</h5>
                                <p class="text-danger my-auto">3 training left</p>
                                <span class="badge bg-success my-2">50 €</span>
                            </div>
                            <small></small>
                        </span>
                        ))
                    }
                    
                   
                </div>
            </div>
        </div>
    )
}

export default TraininigTypes
