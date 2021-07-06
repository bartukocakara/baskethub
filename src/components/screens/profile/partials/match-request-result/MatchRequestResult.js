import React from 'react'
import { AiFillCheckCircle } from "@react-icons/all-files/ai/AiFillCheckCircle";

const MatchRequestResult = () => {
    return (
        <div>
            <h5>Match Request Result</h5>
            <h6>z Court Accepted <AiFillCheckCircle className="text-success"/></h6>
            <p>x players accepted <AiFillCheckCircle className="text-success"/></p>
            <p>y teams accepted <AiFillCheckCircle className="text-success"/></p>
        </div>
    )
}

export default MatchRequestResult
