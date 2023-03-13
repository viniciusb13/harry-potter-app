import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from './Components/Header/Header'
import Characters from './Pages/Characters/Characters'
import Spells from './Pages/Spells/Spells'
import Houses from './Pages/Houses/Houses'
import HouseCharacters from './Pages/HouseCharacters/HouseCharacters'
import CharacterByType from './Pages/CharacterByType/CharacterByType'
import CharacterMenu from './Pages/CharactersMenu/CharactersMenu'
import Loading from './Components/Loading/Loading'

import './App.css'

function App() {
  const [loading, setLoading] = useState(false)
  let x = false;

  if(x) {
    return <Loading />
  }

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" exact element={<Characters />} />
        <Route path="/spells" element={<Spells />} />
        <Route path="/houses" element={<Houses />} />
        <Route path="/houses/:house" element={<HouseCharacters />} />
        <Route path="/characters" element={<CharacterMenu />} />
        <Route path="/characters/:type" element={<CharacterByType />} />
      </Routes>
    </div>
  )
}

export default App
