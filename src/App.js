// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Hotel from './pages/hotel/Hotel';
import List from './pages/Hotellist/HotelList';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/hotels' element={<List/>}></Route>
      <Route path='/hotels/:id' element={<Hotel/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
