import './_app.scss';

import Sidebar from "./components/layouts/sidebar/Sidebar";
import Navbar from "./components/layouts/navbar/Navbar";
import MyMatches from './components/screens/my-matches/MyMatches';
import Search from './components/layouts/search/Search';
import Widgets from './components/layouts/widgets/Widgets';
import MyFavCourts from './components/screens/my-fav-courts/MyFavCourts';
import MyFavPlayers from './components/screens/my-fav-players/MyFavPlayers';
import MyTeams from './components/screens/my-teams/MyTeams';

function App() {
  return (
    <div className="App">

        {/* navbar */}
        <Navbar />
        {/* searchbar */}
        <Sidebar />
        <div id="main" className="container main-section">
            <div className="row">
              <div className="col-md-8 col-lg-8 feed">
              <Search />

            {/* ========== Feed Screens ============ */}
              {/* <MyMatches /> */}
              {/* <MyFavCourts /> */}
              {/* <MyFavPlayers /> */}
              <MyTeams /> 

              </div>
              
              <Widgets />
            {/* ========== Without Widget Screens ========= */}
              {/* PlayerDetail */}
              {/* FavCourtDetail */}
              {/* MatchDetail */}
              {/* FavPlayerDetail */}
              {/* MyProfile */}
              {/* Contact */}
              {/* Hizmet Şartları */}
              {/* Gizlilik politikası */}
              {/* Çerez Politikası */}
              {/* Hakkımızda */}
              {/* S.S.S */}

          </div>
        </div>        
    </div>
  );
}

export default App;
