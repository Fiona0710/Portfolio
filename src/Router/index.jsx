import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Works from '../pages/Works';
import Contact from '../pages/Contact';
import Layout from '../components/Layout';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<Layout />}
        >
          <Route
            index
            element={<Home />}
          />
          <Route
            path='/works'
            element={<Works />}
          />
          <Route
            path='/contact'
            element={<Contact />}
          />
          <Route
            path='*'
            element={<Home />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
