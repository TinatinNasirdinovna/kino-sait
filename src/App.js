import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Popular from './components/Popular';
import TopRated from './components/TopRated';
import MovieDetails from './Pages/MovieDetails';

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/popular' element={<Popular/>}/>
          <Route path='/topRated' element={<TopRated/>}/>
          <Route path='/movieDetails/:kinoId' element={<MovieDetails/>}/>
        </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
