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
const ParticipantGift = () => {
    
    return (
        <div className="row mt-3 p-3">
            {
                giftList.map(gift => (
                    <div class="col-md-3">
                        <div class="card border card-shadow rounded p-2">
                            <div class="card-body py-4 px-5">
                                <div class="d-flex align-items-center">
                                    <div class="avatar avatar-xl">
                                        <img src={"../assets/images/gifts/"+gift.imageName} alt="Face 1" />
                                    </div>
                                    <div class="ms-3 name">
                                        <h5 class="font-bold">{gift.name}</h5>
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

export default ParticipantGift
