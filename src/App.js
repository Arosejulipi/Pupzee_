
import './App.css';
import NavBar from './Components/navBar/NavBar';
import ItemListContainer from './Components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/itemDetailContainer/itemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ErrorPage from './Components/errorPage/ErrorPage';

function App() {
  return (
   
   <BrowserRouter>
    <NavBar/>
   <Routes>

<Route path='/itemDetail' element={<ItemDetailContainer/>}/>

<Route path="/category/:categoryName" element={<ItemListContainer />} />

<Route path='/' element={<ItemListContainer/>}/>

<Route path="/itemDetail/:id" element= {<ItemDetailContainer />  }/>

<Route path='*' element={<ErrorPage/>}/>

</Routes>
   </BrowserRouter>
  );
}

export default App;
