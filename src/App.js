import NavBar from './Components/Navbar/Navbar';
import ItemListContainer from './Components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting="Bienvenidos a la tienda de empanadas. Se vienen cositas..."/>
    </div>
  );
}

export default App;
