import { useState, useEffect } from 'react'

import { getSpells } from '../../api/axios.js'
import Loading from '../../Components/Loading/Loading'
import './style.css'

const Spells = () => {
  const [spells, setSpells] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
      setLoading(true)
      getSpells().then(res => {
          setSpells(res)
          setLoading(false)
      })
  }, [])

  if(loading) {
      return <Loading />
  }

  return (
    <div className="spell-list-container">
      {
        spells.map((spell, index) => {
          return (
            <div key={index} className="spell-card-background">
              <div className="spell-card">
                <h2>{spell.name}</h2>
                <p>{spell.description}</p>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Spells