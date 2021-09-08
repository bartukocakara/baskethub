import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';

import {
    Link,
  } from "react-router-dom";

const PlayedMatches = () => {
    return (
        <div className="row">
        {
            [...Array(5)].map((matchTeam) => (
            <div className=" p-2 col-md-4 col-xs-12 ml-1 mb-2 text-center">
                <label className="fw-bold m-2">Karşıyaka spor salonu</label>
                <Link to="ended-match-detail">
                    <div className="border rounded w-100 craete-match-card d-flex p-2">
                        <AvatarGroup max={3} className="m-2" >
                            <Avatar alt="Remy Sharp" src="assets/images/faces/2.jpg" />
                            <Avatar alt="Travis Howard" src="assets/images/faces/2.jpg" />
                            <Avatar alt="Cindy Baker" src="assets/images/faces/2.jpg" />
                            <Avatar alt="Agnes Walker" src="assets/images/faces/2.jpg" />
                            <Avatar alt="Trevor Henderson" src="assets/images/faces/2.jpg" />
                        </AvatarGroup>
                        <div className="name ms-4">
                            <h6 className="text-muted mt-2 m-auto">12/06-2021</h6>
                        </div>
                    </div>
                </Link>
            </div>
            ))
        }

    </div>
    )
}

export default PlayedMatches
