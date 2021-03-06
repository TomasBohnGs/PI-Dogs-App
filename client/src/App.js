import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import LandingPage from './Pages/LandingPage/LandingPage.jsx'
import Home from './Pages/Home/Home.jsx'
import BreedDetail from './Pages/BreedDetail/BreedDetail.jsx'
import AddBreed from './Pages/AddBreed/AddBreed.jsx'
import NotFound from './Components/NotFound/NotFound.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/BreedDetail/:id" element={<BreedDetail />} />
        <Route path="/AddBreed" element={<AddBreed />} />
        <Route path="/*" element={<NotFound message="Page"/>} />
      </Routes>
    </BrowserRouter>
  );
} 

export default App;
