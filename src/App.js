import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Reservation_table from './components/Reservation_table';
import Menu_items from './components/Menu_items';
import Chef_section from './components/Chef_section';
import Video_section from './components/Video_section';
import Our_laurels from './components/Our_laurels';
import Our_newslatter from './components/Our_newslatter';
import Footer from './components/Footer';

function App() {
  return (
  <>
    <Navbar/>
    <Header/>
    <About/>
    <Reservation_table/>
    <Menu_items/>
    <Chef_section/>
    <Video_section/>
    <Our_laurels/>
    <Our_newslatter/>
    <Footer/>
  </>
  );
}

export default App;
