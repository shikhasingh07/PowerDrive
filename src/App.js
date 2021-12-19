import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar/Navbar';
import Main from './Components/Carousel/Main';
import Cards from './Components/Cards/Cards';
import Whowe from './Components/WhoWe/Whowe';
import "./styles/App.scss"
function App() {
  return (
    <div className='wrapper'>
      <Navbar />
      <Main />
      <Cards />
      <Whowe />
    </div>
  );
}

export default App;
