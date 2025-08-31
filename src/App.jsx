import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/assets/css/app.css';

import HomePage from './components/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyNavbar from './components/MyNavbar';
import AccountPage from './components/AccountPage';
import SettingsPage from './components/SettingsPage';
// import AccountPage from './components/AccountPage';
// import SettingsPage from './components/SettingsPage';

function App() {
  return (
    <>
      <div className='d-flex flex-column' style={{ minHeight: '100vh' }}>
        <BrowserRouter>
          <MyNavbar />

          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/profile' element={<AccountPage />} />
            <Route path='/settings' element={<SettingsPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

// decommentare import e page component desiderati per "navigare" nella web app
