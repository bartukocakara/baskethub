import React, { useState } from 'react'
import TeamSearchModal from "../../../modals/search/team-search/TeamSearchModal";

const TeamSearch = () => {
    const [showTeamSearch, setTeamShow] = useState(false);
  
    const handleTeamClose = () => setTeamShow(false);
    const handleTeamShow = () => setTeamShow(true);
    return (
        <>
            <TeamSearchModal handleTeamClose={handleTeamClose} show={showTeamSearch}/>

            <div className="col-md-12 col-12">
                <nav className=" row mb-4">
                <h4 className="col-md-4 m-2 text-center">İstanbul</h4>
                    <select className="btn btn-primary col-md-2 m-2">
                        <option>Map list</option>
                        <option>Card list</option>
                    </select>
                    <button className="btn btn-primary col-md-2 m-2" onClick={handleTeamShow}>Edit Search</button>
                    <input className="form-control w-25 col-md-4 m-2 text-center" placeholder="Hızlı ara"  />
                </nav>
                <p> <span className="fw-bold text-primary"> 235 </span> results found...</p>
            </div>
        </>
    )
}

export default TeamSearch
