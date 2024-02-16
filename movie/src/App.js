import { useEffect, useState } from 'react';
import './App.css';
import MovieCard from './MovieCard';
import SearchForm from './SearchForm';
import Footer from './Footer';
import Rating from './Rating';
import Reviews from './REview';
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
import NavBar from './NavBar';
import SignIn from './SignIn';


function App() {

  const url = "https://movie-kohl-gamma.vercel.app/Search"
  const [Search, setSearch] = useState([])
  const [appRating, setAppRating] = useState(0);
  const [reviews, setReviews] = useState([]);


  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setSearch(data))
  }, [])

  console.log(Search)

  const handleSearch = (term) => {
    fetch(`${url}?s=${term}`)
      .then((res) => res.json())
      .then((data) => setSearch(data.Search));
  };

  const handleRateApp = (rating) => {

    setAppRating(rating);
  };

  const handleAddReview = (review) => {
    setReviews([...reviews, { text: review }]);
  };



  return (
    <div className="App">
      <div className='"search-nav'>
        <div className='title'>
          <h1>Movies</h1>
        </div>

        <div>
          <SearchForm onSearch={handleSearch} />

        </div>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path="/signin" element={<SignIn />} />
          </Routes>
        </BrowserRouter >

        <div className='movies'>
          {Search && Search.map((movie) => {
            return <MovieCard {...movie} onRate={handleRateApp} />
          })}

        </div>
        <div>
          <Rating onRate={handleRateApp} />
        </div>
        <div>
          <Footer />

        </div>
        <div>
          <Reviews onAddReview={handleAddReview} />
        </div>

      </div>
    </div>
  );
}

export default App;


