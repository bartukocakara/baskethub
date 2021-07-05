import React, { useState } from 'react'
import TrainerSearchModal from "../../../modals//trainer-search/TrainerSearchModal";

const TrainerSearch = () => {

    const [showTrainerSearch, setTrainerShow] = useState(false);
  
    const handleTrainerClose = () => setTrainerShow(false);
    const handleTrainerShow = () => setTrainerShow(true);
    return (
        <>
            <TrainerSearchModal handleTrainerClose={handleTrainerClose} show={showTrainerSearch}/>

            <div className="col-md-12 col-12">
                <nav className=" row mb-4">
                    <h4 className="col-md-6 m-2 text-center">İstanbul</h4>
                    <button className="btn btn-primary col-md-2 m-2" onClick={handleTrainerShow}>Edit Search</button>
                    <input className="form-control w-25 col-md-4 m-2 text-center" placeholder="Hızlı ara"  />
                </nav>
            </div>
        </>
    )
}

export default TrainerSearch
