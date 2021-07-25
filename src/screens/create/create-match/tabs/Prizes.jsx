import React from 'react'
import { GiTrophyCup } from "@react-icons/all-files/gi/GiTrophyCup";

const Prizes = () => {
    return (
        <div class="col-12 mt-3 text-center ">
        <GiTrophyCup size={40} className="text-success m-2"/>
        <select className="form-control m-1 bg-primary m-auto w-25 p-3 text-light" name="" >
            <option>Prize x</option>,
            <option>Prize x</option>
            <option>Prize x</option>
            <option>Prize x</option>
            <option>No Prize</option>
        </select>
    </div>
    )
}

export default Prizes
