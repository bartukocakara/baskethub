import React, { useState } from 'react'
import TournamentSearchModal from "../../../modals/search/tournament-search/TournamentSearchModal";

const TournamentSearch = () => {
    const [showTournamentSearch, setTournamentShow] = useState(false);
  
    const handleTournamentClose = () => setTournamentShow(false);
    const handleTournamentShow = () => setTournamentShow(true);
    return (
        <>
            <TournamentSearchModal handleTournamentClose={handleTournamentClose} show={showTournamentSearch}/>

            <div className="col-md-12 col-12">
                <nav className=" row mb-4">
                    <h4 className="col-md-6 m-2 text-center">İstanbul</h4>
                    <button className="btn btn-primary col-md-2 m-2" onClick={handleTournamentShow}>Edit Search</button>
                    <input className="form-control w-25 col-md-4 m-2 text-center" placeholder="Hızlı ara"  />
                </nav>
            </div>
        </>
    )
}

export default TournamentSearch
