import React from 'react'
import { GiTrophyCup } from "@react-icons/all-files/gi/GiTrophyCup";

const Prizes = () => {
    return (
        <div class="col-12 mt-3 text-center ">
        <GiTrophyCup size={40} className="text-success m-2"/>
        <div className="form-group row">
            <div className="col-md-6 row">
                <h5>New Prize</h5>
                <hr />
                <div className="col-md-12 my-2">
                    <h6>Name</h6>
                    <input type="text" name="prize" className="form-control" />
                </div>
                <div className="col-md-12 my-2">
                    <h6>Image</h6>
                    <input type="file" name="prize" className="form-control" />
                </div>
            </div>
            <div className="col-md-6">
                <h6>Or please select 1 of given prizes</h6>
                <select className="form-control  bg-primary m-auto w-50 text-light" name="" >
                    <option>Match Payment</option>,
                    <option>Baklava</option>
                    <option>Yemek</option>
                </select>
            </div>
        </div>
    </div>
    )
}

export default Prizes
