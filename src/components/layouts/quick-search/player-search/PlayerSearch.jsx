import React, { useState } from 'react'
import PlayerSearchModal from "../../../modals/search/player-search/PlayerSearchModal";

const PlayerSearch = () => {
    const [showPlayerSearch, setPlayerShow] = useState(false);
  
    const handlePlayerClose = () => setPlayerShow(false);
    const handlePlayerShow = () => setPlayerShow(true);
    return (
        <>
                <PlayerSearchModal handlePlayerClose={handlePlayerClose} show={showPlayerSearch}/>

                <div className="col-md-12 col-12">
                    <nav className=" row mb-4">
                        <h4 className="col-md-4 m-2 text-center">İstanbul</h4>
                        <select className="btn btn-primary col-md-2 m-2">
                            <option>Map list</option>
                            <option>Card list</option>
                        </select>
                        <button className="btn btn-primary col-md-2 m-2" onClick={handlePlayerShow}>Edit Search</button>
                        <input className="form-control w-25 col-md-4 m-2 text-center" placeholder="Hızlı ara"  />
                    </nav>
                    <p> <span className="fw-bold text-primary"> 235 </span> results found...</p>
                </div>
        </>
    )
}

export default PlayerSearch
