
import './App.css';

import store from './Redux/Store/Store';
import { Provider } from 'react-redux';
import ProductHomepage from './Containers/ProductHomepage';
import SelectedProducts from './Containers/SelectedProducts';

function App() {
  return (
    <Provider store = {store}>
    
    
    <div className="App">
     <ProductHomepage/>
    </div>
    <SelectedProducts/>
    </Provider>
  );
}

export default App;
