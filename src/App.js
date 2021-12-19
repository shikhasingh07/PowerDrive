import Navbar from './Compoents/Navbar/Navbar';
import Main from './Compoents/Carousel/Main';
import Cards from './Compoents/Cards/Cards';
import Whowe from './Compoents/WhoWeAre/Whowe';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Compoents/Footer/Footer';
import "./styles/App.scss"
function App() {
  return (
    <div className='wrapper'>
      <Navbar />
      <Main />
      <Cards />
      <Whowe />
      <Footer />
    </div>
  );
}

export default App;
