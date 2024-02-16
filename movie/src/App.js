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

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
