import React, { useState, useEffect } from 'react';

const Main = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/data');
      const data = await response.json();
      setData(data);
    };
    fetchData();
  }, []);

  return (
    <main>
      <h2>Data from API</h2>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </main>
  );
};

export default Main;
