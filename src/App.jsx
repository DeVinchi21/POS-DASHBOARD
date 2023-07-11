import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import mockStoreData from './data/mockData';


import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Layout from './components/Layout';
import Inventory from './pages/Inventory';


const App = () => (
  <Routes>
    <Route path='/' element={<Login />}></Route>

    <Route path='/dashboard' element={<Layout><Dashboard /></Layout>} />
    <Route path='/profile' element={<Layout><Profile /></Layout>} />
    <Route path='/inventory' element={<Layout><Inventory data={mockStoreData} /></Layout>} />

  </Routes>
);

export default App;
