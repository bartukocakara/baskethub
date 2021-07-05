import React, { useState } from 'react'
import TeamSearchModal from "../../../modals/team-search/TeamSearchModal";

const TeamSearch = () => {
    const [showTeamSearch, setTeamShow] = useState(false);
  
    const handleTeamClose = () => setTeamShow(false);
    const handleTeamShow = () => setTeamShow(true);
    return (
        <>
            <TeamSearchModal handleTeamClose={handleTeamClose} show={showTeamSearch}/>

            <div className="col-md-12 col-12">
                <nav className=" row mb-4">
                    <h4 className="col-md-6 m-2 text-center">İstanbul</h4>
                    <button className="btn btn-primary col-md-2 m-2" onClick={handleTeamShow}>Edit Search</button>
                    <input className="form-control w-25 col-md-4 m-2 text-center" placeholder="Hızlı ara"  />
                </nav>
            </div>
        </>
    )
}

export default TeamSearch
