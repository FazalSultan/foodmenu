import './App.css';
import FilterableProductTable from './Components/FilterableProductTable';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <FilterableProductTable />
    </div>
  );
}

export default App;
