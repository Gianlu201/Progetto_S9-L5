import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/assets/css/app.css';
import MyNavbar from './components/MyNavbar';
import Main from './components/Main';
import MyFooter from './components/MyFooter';

function App() {
  return (
    <>
      <div>
        <MyNavbar />
        <Main />
        <MyFooter />
      </div>
    </>
  );
}

export default App;
