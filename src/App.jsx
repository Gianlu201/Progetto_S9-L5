import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/assets/css/app.css';
import MyNavbar from './components/MyNavbar';
import MyFooter from './components/MyFooter';

function App() {
  return (
    <>
      <div>
        <MyNavbar />
        <MyFooter />
      </div>
    </>
  );
}

export default App;
