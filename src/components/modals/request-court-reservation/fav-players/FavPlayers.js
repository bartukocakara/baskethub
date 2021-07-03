import React from 'react'

import {
    Link,
  } from "react-router-dom";
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail";

const FavPlayers = () => {
    return (
        <>
        <div className="widget-todo-item p-2 col-12">
                <div className="d-flex mb-1">
                    <div className="d-flex align-items-center w-75">
                        <i data-feather="list" className="cursor-move"></i>
                        <div className="checkbox checkbox-shadow m-2">
                            <input type="checkbox" className="form-check-input" id="checkbox1" />
                        </div>
                        <h6 className="m-2">Ata Aksoy</h6>
                    </div>
                    <div className="avatar widget-todo-item-action d-flex align-items-center">
                        <img src="assets/images/faces/1.jpg" alt="" srcset="" />

                        <Link to="message-detail" className="m-2">
                            <AiOutlineMail size={25} />
                        </Link>
                    </div>
                </div>
            </div>
            <hr /> 
        </>
    )
}

export default FavPlayers
