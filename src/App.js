import './_app.scss';

import Sidebar from "./components/layouts/sidebar/Sidebar";
import Navbar from "./components/layouts/navbar/Navbar";
import MyMatches from './components/screens/my-matches/MyMatches';
import Search from './components/layouts/search/Search';
import Widgets from './components/layouts/widgets/Widgets';

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
            <MyMatches />
            </div>
            
            <Widgets />
        </div>
        </div>
        {/* screen */}
        
    </div>
  );
}

export default App;
