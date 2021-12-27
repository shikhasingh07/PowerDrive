import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar/Navbar';
import Main from './Components/Carousel/Main';
import Cards from './Components/Cards/Cards';
import Whowe from './Components/WhoWe/Whowe';
import Footer from './Components/Footer/Footer';
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
