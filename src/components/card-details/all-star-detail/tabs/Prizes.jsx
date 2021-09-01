import React from 'react'
import tabs from "../../../../fake-server/card-details/all-star-detail/tabs";
console.log(tabs);

const Prizes = () => {
    return (
        <div className="row mt-3 p-3">
            {
                tabs.prizes.map(prize => (
                    <div class="col-md-3">
                        <div class="card border shadow rounded p-2">
                            <div class="card-body py-4 px-5">
                                <div class="d-flex align-items-center">
                                    <div class="avatar avatar-xl">
                                        <img src={"../assets/images/prizes/"+prize.avatar} alt="Face 1" />
                                    </div>
                                    <div class="ms-3 name">
                                        <h5 class="font-bold">{prize.name}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
            
        </div>
    )
}

export default Prizes
