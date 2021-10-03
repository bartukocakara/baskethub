import React from 'react'

const giftList = [
    {
        imageName : "gift-tshirt.jpg",
        name : "Tshirt",
    },
    {
        imageName : "certification.jpg",
        name : "Certfication",
    },
    {
        imageName : "bag.jpg",
        name : "Bag",
    },
]
const Prizes = () => {
    
    return (
        <div className="row">
            <div className="col-md-6 row mt-3 p-3">
                {
                    giftList.map(gift => (
                        <div class="col-md-6">
                            <div class="card border card-shadow rounded p-2">
                                <div class="text-center">
                                    <div class="m-auto">
                                        <div class="avatar avatar-xl">
                                            <img src={"../assets/images/gifts/"+gift.imageName} alt="Face 1" />
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
                <h5 className="text-center">New Prize</h5>
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

export default Prizes
