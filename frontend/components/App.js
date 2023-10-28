import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Characters from './Character'


const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

function App() {
  // ❗ Create state to hold the data from the API
  // ❗ Create effects to fetch the data and put it in state
  const [characters, setCharacters] = useState([]);
  const [planets, setPlanets] = useState([]);

  // Create effects to fetch the data and put it in state
  useEffect(() => {
    // Fetch character data
    Promise.all([
      axios.get(urlPeople),
      axios.get(urlPlanets)
    ])
      .then(([peopleResponse, planetsResponse]) => {
        setCharacters(peopleResponse.data);
        setPlanets(planetsResponse.data);
      })
      .catch((error) => {
        console.error('Error fetching planet data:', error);
      });
  }, []);

  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      {/* ❗ Map over the data in state, rendering a Character at each iteration */}
      {characters.map((characterData) => (
        <Characters key={characterData.id} data={characterData} planets={planets} />
      ))}
    </div>
  )
}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
