import React from 'react'
import { Link } from 'react-router-dom'

const ManagerComments = () => {
    return (
        <div class="card">
        <h4 class="card-title">Manager Comments</h4>
        <div class="card-content">
            <div class="card-body">
                <div class="list-group">
                    <Link href="#" class="list-group-item list-group-item-action active">
                        <div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-1 text-white">List group item heading</h5>
                            <small>3 days ago</small>
                        </div>
                        <p class="mb-1">
                            Donec id elit non mi porta gravida at eget metus. Maecenas sed
                            diam eget risus varius blandit.
                        </p>
                        <small>Donec id elit non mi porta.</small>
                    </Link>
                    <Link href="#" class="list-group-item list-group-item-action">
                        <div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-1">List group item heading</h5>
                            <small>3 days ago</small>
                        </div>
                        <p class="mb-1">
                            Donec id elit non mi porta gravida at eget metus. Maecenas sed
                            diam eget risus varius blandit.
                        </p>
                        <small>Donec id elit non mi porta.</small>
                    </Link>
                    <Link href="#" class="list-group-item list-group-item-action">
                        <div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-1">List group item heading</h5>
                            <small>3 days ago</small>
                        </div>
                        <p class="mb-1">
                            Donec id elit non mi porta gravida at eget metus. Maecenas sed
                            diam eget risus varius blandit.
                        </p>
                        <small>Donec id elit non mi porta.</small>
                    </Link>
                </div>
            </div>
        </div>
    </div>
    )
}

export default ManagerComments
