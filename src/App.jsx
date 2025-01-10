import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/assets/css/app.css';
import MyNavbar from './components/MyNavbar';
import Main from './components/Main';
import MyFooter from './components/MyFooter';

function App() {
  return (
    <>
      <div className='d-flex flex-column' style={{ minHeight: '100vh' }}>
        <MyNavbar />
        <Main />
        <MyFooter />
      </div>
    </>
  );
}

export default App;
