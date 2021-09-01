import PlayerDetail from './../components/card-details/player-detail/PlayerDetail';
import MyFavPlayers from './../screens/my-fav-players/MyFavPlayers';

const PlayerRoutes = () => {
    return (
        <>
            <Route path="/favourite-players" component={MyFavPlayers} />
            <Route path="/player-detail" component={PlayerDetail} />
        </>
    )
}

export default PlayerRoutes
