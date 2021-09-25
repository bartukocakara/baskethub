import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BsFillTrashFill } from "@react-icons/all-files/bs/BsFillTrashFill";
import { BiEdit } from "@react-icons/all-files/bi/BiEdit";
import ConfirmDeleteTournamentGift from '../../../../modals/confirm/ConfirmDeleteTournamentGift';

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
    {
        imageName : "bag.jpg",
        name : "Bag",
    },
    {
        imageName : "bag.jpg",
        name : "Bag",
    },
    {
        imageName : "bag.jpg",
        name : "Bag",
    },
    {
        imageName : "bag.jpg",
        name : "Bag",
    },
    {
        imageName : "bag.jpg",
        name : "Bag",
    },
]
const Gifts = () => {

    const [showConfirmDeleteGift, setConfirmDeleteGiftShow] = useState(false);
  
    const handleConfirmDeleteGiftClose = () => setConfirmDeleteGiftShow(false);
    const handleConfirmDeleteGiftShow = () => setConfirmDeleteGiftShow(true);
    
    return (
        <>
        <ConfirmDeleteTournamentGift handleConfirmDeleteGiftClose={handleConfirmDeleteGiftClose}  show={showConfirmDeleteGift} />
        <Link className="btn btn-warning w-25" to="create-gift">
            Create gift
        </Link>
        <div className="row mt-3 p-3">
            {
                giftList.map(gift => (
                    <div className="col-md-3 gift-card">
                        <div className="card border shadow rounded card-shadow">
                            <div className="card-body py-4">
                                <div className="d-flex align-items-center">
                                    <div className="avatar avatar-xl">
                                        <img src={"../assets/images/gifts/"+gift.imageName} alt="Face 1" />
                                    </div>
                                    <div className="ms-2 name">
                                        <p className="font-bold">{gift.name}</p>
                                    </div>
                                </div>
                                <div className="fixed-actions">
                                    <span className="badge bg-danger avatar p-2 m-1" onClick={handleConfirmDeleteGiftShow}><Link className="text-light"> <BsFillTrashFill/> </Link></span>
                                    <span className="badge bg-primary avatar p-2 m-1"><Link className="text-light" to="edit-gift"> <BiEdit/> </Link></span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
            
        </div>
        </>
    )
}

export default Gifts
