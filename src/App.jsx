import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/assets/css/app.css';

import HomePage from './components/Homepage';
// import SettingsPage from './components/SettingsPage';
// import AccountPage from './components/AccountPage';

function App() {
  return (
    <>
      <div className='d-flex flex-column' style={{ minHeight: '100vh' }}>
        <HomePage />
        {/* <AccountPage /> */}
        {/* <SettingsPage /> */}
      </div>
    </>
  );
}

export default App;
