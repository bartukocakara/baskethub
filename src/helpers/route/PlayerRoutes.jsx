import PlayerDetail from './../../components/card-details/player-detail/PlayerDetail';
import MyFavPlayers from './../../screens/my-fav-players/MyFavPlayers';
import {
    Route,
  } from "react-router-dom";
const playerRoutes = [
            <Route path="/favourite-players" component={MyFavPlayers} />,
            <Route path="/player-detail" component={PlayerDetail} />
        ]

export default playerRoutes
