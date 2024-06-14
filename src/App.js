import logo from './logo.svg';
import './App.scss';
import StoreList from './pages/StoreList';
import Cart from './pages/Cart';
import Container from './components/Container';
import React, { useReducer } from 'react';
import {Routes, Route} from "react-router-dom";
import Orders from './pages/Orders';
import {reducer} from "./reducers/Reducer";

export const ContextDispatch = React.createContext();

function App() {

  const initialState = {
    selItem: null,
    cName: null,
    cAddress: null,
    cEmail: null,
    cNumber: null,
    ccNumber: null
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state);



  return (
    <div className="App py-50">
      <Container >
      <ContextDispatch.Provider value={state}>
        <Routes>
          <Route path="/" element={<StoreList stateChanger={dispatch} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </ContextDispatch.Provider>
        {/* <StoreList /> */}
      </Container>      
    </div>
  );
}

export default App;
