import React, { useState } from 'react'
import MatchSearchModal from "../../../modals/match-search/MatchSearchModal";

const MatchSearch = () => {
    const [showMatchSearch, setMatchShow] = useState(false);
  
    const handleMatchClose = () => setMatchShow(false);
    const handleMatchShow = () => setMatchShow(true);
    return (
        <>
            <MatchSearchModal handleMatchClose={handleMatchClose} show={showMatchSearch}/>
            <div className="col-md-12 col-12">
                <nav className=" row mb-4">
                    <h4 className="col-md-4 m-2 text-center">İstanbul</h4>
                    <select className="btn btn-primary col-md-2 m-2">
                        <option>Map list</option>
                        <option>Card list</option>
                    </select>
                    <button className="btn btn-primary col-md-2 m-2" onClick={handleMatchShow}>Edit Search</button>
                    <input className="form-control w-25 col-md-4 m-2 text-center" placeholder="Hızlı ara"  />
                </nav>
            </div>
        </>
    )
}

export default MatchSearch
