import './App.css';
import 'materialize-css/dist/css/materialize.css';

import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/NavBar/Cart/ItemListContainer';

function App() {
  return (
    <body>
      <nav>
        <NavBar />
      </nav>
      <main>
        <ItemListContainer />
      </main>
    </body>
  );
}

export default App;
