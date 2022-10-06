import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './Pages/LandingPage/LandingPage';
import ShopPage from './Pages/ShopPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<LandingPage />} />
      <Route path="/shop" element={<ShopPage />}>
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
