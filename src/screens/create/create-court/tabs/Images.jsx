import { BsFillTrashFill } from '@react-icons/all-files/bs/BsFillTrashFill'
import React from 'react'
import { Link } from 'react-router-dom'

const Images = () => {
    return (
        <>
            <div className="form-group col-md-6 p-2 m-auto">
                <label for="helpInputTo" className="p-2">Court Images </label>
                <input type="file" className="form-control" id="helpInputTop" />
            </div>
            <div className="row my-3">
            {
                [...Array(5)].map(() => (
                    <div class="card col-md-4 ">
                        <div class=" border rounded text-center card-shadow">
                            <div class="w-100">
                                <img src="assets/images/samples/basket-salon2.jpg" className="w-100 rounded" alt="Face 1" />
                            </div>
                        </div>
                        <div className="fixed-actions">
                            <span className="badge bg-danger avatar p-2 m-1"><Link className="text-light"> <BsFillTrashFill /> </Link></span>
                        </div>
                    </div>
                ))
            
            }
            </div>
        </>
    )
}

export default Images
