import { useState } from 'react'
import './App.css'
import HomeComponent from './components/HomeComponent'
import QuizComponent from './components/QuizComponent'
import ResultComponent from './components/ResultComponent'

function App() {

  return (
    <>
      <HomeComponent/>
      <QuizComponent/>
      <ResultComponent/>
      <footer>Made  by Gourasnh vavishnav</footer>
    </>
  )
}

export default App
