
import './App.css';
import ProdList from './components/ProdList';
import { useSelector } from 'react-redux';

function App() {
  const produits=useSelector(state => state.produits)
  return (
    <>
   <ProdList produits={produits}></ProdList>
  </>
  );
}

export default App;
