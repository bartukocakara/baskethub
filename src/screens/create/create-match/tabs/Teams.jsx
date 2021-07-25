import React from 'react'
import { GiBugleCall } from "@react-icons/all-files/gi/GiBugleCall";
import FavTeams from '../../../../components/modals/request-court-reservation/fav-teams/FavTeams';

const Teams = () => {
    return (
        <>
            <GiBugleCall size={50} className="text-primary" />
            <h6 className="text-center">Call List</h6>
            <div className="list-select m-2 row"  id="widget-todo-list">
                {
                    [...Array(5)].map((player) => (
                        <FavTeams />
                    ))
                }
                    
            </div>
        </>
    )
}

export default Teams
