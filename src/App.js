import React, { useEffect, useState } from "react";
import CardList from "./components/card-list/card-list.component";
import "./App.css";

const MONSTERS_URL = "https://jsonplaceholder.typicode.com/users";

const useFetchMonsters = () => {
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    async function fetchMonsters() {
      const response = await fetch(MONSTERS_URL);
      const monsters = await response.json();

      setMonsters(monsters);
    }
    fetchMonsters();
  }, []);

  return monsters;
};

const App = () => {
  const monsters = useFetchMonsters();

  return (
    <div className="App">
      <CardList monsters={monsters} />
    </div>
  );
};

export default App;
