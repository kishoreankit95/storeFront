import logo from './logo.svg';
import './App.scss';
import StoreList from './pages/StoreList';
import Cart from './pages/Cart';
import Container from './components/Container';
import { useReducer } from 'react';
import {Routes, Route} from "react-router-dom";
import Orders from './pages/Orders';

function App() {

  const initialState = {
    selItem: null,
    cName: null,
    cAddress: null,
    cEmail: null,
    cNumber: null,
    ccNumber: null
  };
  

  const reducer = (state, action) => {
    switch(action.type){
      case "productSelect":
        return {...state, selItem: action.value}
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state);



  return (
    <div className="App py-50">
      <Container >
      <Routes>
        <Route path="/" element={<StoreList stateChanger={dispatch} />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
        {/* <StoreList /> */}
      </Container>      
    </div>
  );
}

export default App;
