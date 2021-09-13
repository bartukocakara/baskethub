import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillFileText } from "@react-icons/all-files/ai/AiFillFileText";


const Licence = () => {
    return (
        <div className="col-md-10 col-sm-12 m-auto">
            <div class="card-content">
                <div class="card-body">
                    <div class="list-group">
                        {
                            [...Array(5)].map((licence) => (
                                <Link class="list-group-item list-group-item-action row" to="licence-detail">
                                    <div class="d-flex w-100 justify-content-between">
                                    <AiFillFileText size={30} />

                                        <h6 class="mb-1">List group item heading</h6>
                                        <small>3 days ago</small>
                                    </div>
                                    <p class="mb-1">
                                        Donec id elit non mi porta gravida at eget metus. Maecenas sed
                                        diam eget risus varius blandit.
                                    </p>
                                    <small>Donec id elit non mi porta.</small>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Licence
