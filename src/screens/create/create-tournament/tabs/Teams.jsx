import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import { Link } from 'react-router-dom';

const Teams = () => {
    return (
        <div className="row">
            <div className="col-md-12">
                <div className="form-group d-flex">
                    <input type="search" className="form-control w-50 m-auto" placeholder="Ara..."/>
                </div>
            </div>
        {
            [...Array(5)].map(() => (
                <div class="card col-md-3 ">
                    <div class="card-body border rounded text-center">
                        <div class="align-items-center w-50 m-auto" >
                            <AvatarGroup max={4} className="m-auto">
                                <Avatar alt="Remy Sharp" src="assets/images/faces/2.jpg" />
                                <Avatar alt="Travis Howard" src="assets/images/faces/1.jpg" />
                                <Avatar alt="Cindy Baker" src="assets/images/faces/4.jpg" />
                                <Avatar alt="Agnes Walker" src="assets/images/faces/5.jpg" />
                                <Avatar alt="Trevor Henderson" src="assets/images/faces/2.jpg" />
                            </AvatarGroup>
                        </div>
                        <h6 className="my-3"><Link to="team-detail"> Team name</Link>, <span className="text-muted">İzmir</span></h6>
                        <input type="checkbox" className="m-auto form-check-input"/>
                    </div>
                </div>
            ))
        
        }
        
        </div>
    )
}

export default Teams
