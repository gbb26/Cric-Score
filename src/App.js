import React from 'react'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav'
import FetchMatches from './components/liveMatches/FetchMatches';
import FetchSeries from './components/series/FetchSeries';
import FetchSeriesMatches from './components/series/matches/SeriesMatches';
import MatchInfo from './components/matchInfo/MatchInfo';
import 'bootswatch/dist/lumen/bootstrap.min.css';

function App() {

  return (
    <>
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route exact path='/' element={<FetchMatches/> } />
      <Route exact path='/series' element={<FetchSeries/> } />
      <Route exact path='/seriesMatches' element={<FetchSeriesMatches/> } />
      <Route exact path='/matchInfo' element={<MatchInfo/> } />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
// API KEY = f511baff-9794-4ca5-b544-9716f588c1cb
