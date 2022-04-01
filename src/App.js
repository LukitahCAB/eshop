import './App.css';
import 'materialize-css/dist/css/materialize.css';

import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/NavBar/Cart/ItemListContainer';

function App() {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className="center-align">
        <ItemListContainer />
      </div>
    </div>
  );
}

export default App;
