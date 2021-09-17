import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';

const Teams = () => {
    return (
        <div className="row">
            {
                [...Array(5)].map((player) => (
                    <div className="col-md-3 my-2">
                        <div className="card border rounded card-shadow">
                            <span className="text-center fw-bold m-2">Karşıyaka Team</span>
                            <div className="text-center">
                                <div class="avatar avatar-lg m-1">
                                    <AvatarGroup max={4} >
                                        <Avatar alt="Remy Sharp" src="assets/images/faces/6.jpg" />
                                        <Avatar alt="Travis Howard" src="assets/images/faces/1.jpg" />
                                        <Avatar alt="Cindy Baker" src="assets/images/faces/4.jpg" />
                                        <Avatar alt="Agnes Walker" src="assets/images/faces/2.jpg" />
                                        <Avatar alt="Trevor Henderson" src="assets/images/faces/2.jpg" />
                                    </AvatarGroup>
                                </div>
                                <div className="p-2  text-center ">
                                    <p>Contract Date : <span>16/12/2022</span></p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Teams
