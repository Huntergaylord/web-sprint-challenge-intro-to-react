import React, { useState} from 'react'

function Character({ data }) { // ❗ Add the props
  // ❗ Create a state to hold whether the homeworld is rendering or not
  // ❗ Create a "toggle" click handler to show or remove the homeworld
  const [showHomeworld, setShowHomeworld] = useState(false);

  const toggleHomeworld = () => {
    setShowHomeworld(!showHomeworld);
  };

  return (
    <div>
    {/* Use the same markup with the same attributes as in the mock */}
    <div className="character-card">
    <h3 className="character-name">{data.name}</h3>
      <button onClick={toggleHomeworld}>Toggle Homeworld</button>
      {showHomeworld && (
        <div className="homeworld">
          <h4>Homeworld: {data.homeworld.name}</h4>
          <p>Population: {data.homeworld.population}</p>
        </div>
      )}
    </div>
  </div>
);
}
  


export default Character
