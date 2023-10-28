import React, {useState} from 'react'

function Character({ data, planets }) { // ❗ Add the props
  // ❗ Create a state to hold whether the homeworld is rendering or not
  // ❗ Create a "toggle" click handler to show or remove the homeworld
  const [showHomeworld, setShowHomeworld] = useState(false);

  const toggleHomeworld = () => {
    setShowHomeworld(!showHomeworld);
  };
  const characterHomeworld = planets.find(planet => planet.id === data.homeworld);

  return (
    <div>
    {/* Use the same markup with the same attributes as in the mock */}
    <div className={`character-card ${showHomeworld ? 'show-planet' : ''}`} onClick={toggleHomeworld}>
      <h3 className="character-name">{data.name}</h3>
      {showHomeworld && characterHomeworld && (
        <div className="character-planet">
          <h4>Homeworld: {characterHomeworld.name}</h4>
          <p>Population: {characterHomeworld.population}</p>
        </div>
      )}
    </div>
    </div>
);
}
  


export default Character
