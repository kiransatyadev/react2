import React, { useEffect, useState } from 'react';

function App() {
  const [colors, setColors] = useState([]);

  useEffect(() => {
    fetchColors();
  }, []);

  const fetchColors = async () => {
    try {
      const response = await fetch('https://reqres.in/api/unknown');
      const data = await response.json();
      setColors(data.data);
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <div>
      <h1>Color List</h1>
      <ul>
        {colors.map(color => (
          <li
            key={color.id}
            style={{ backgroundColor: color.color 

            }}
          >
            {color.name}
          </li>
        ))}
      </ul>
      <h1 center>Color List</h1>
      {colors.map(color => (
          <li
            key={color.id}
          >
            {color.name}
          </li>
      ))}
    </div>

  );
}
export default App;