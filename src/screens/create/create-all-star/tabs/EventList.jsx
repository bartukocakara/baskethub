import React from 'react'

const eventList = [
    {
        imageName : "event1.jpg",
        name : "Shooting",
    },
    {
        imageName : "event2.jpg",
        name : "Match",
    },
    {
        imageName : "event3.jpg",
        name : "Slam Dunk",
    },
    {
        imageName : "event4.jpg",
        name : "Talent",
    },
]
const EventList = () => {
    
    return (
        <div className="row">
            <div className="col-md-6 row mt-3 p-3">
                {
                    eventList.map(gift => (
                        <div class="col-md-6">
                            <div class="card border card-shadow rounded p-2">
                                <div class="text-center">
                                    <div class="m-auto">
                                        <div className="w-100">
                                            <img src={"../assets/images/create/all-star/events/"+gift.imageName} alt="Face 1"  className="w-75 rounded"/>
                                        </div>
                                        <div>
                                            <p class="font-bold">{gift.name}</p>
                                            <input type="checkbox" className="form-check-input"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
                
            </div>
            <div className="col-md-6">
                <h5 className="text-center">New Event</h5>
                <hr />
                <div className="col-md-12 my-2">
                    <h6 className="text-center">Name</h6>
                    <input type="text" name="prize" className="form-control" />
                </div>
                <div className="col-md-12 my-2">
                    <h6 className="text-center">Image</h6>
                    <input type="file" name="prize" className="form-control" />
                </div>
            </div>
        </div>
    )
}

export default EventList
