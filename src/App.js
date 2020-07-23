import React, { useEffect, useState } from "react";
import SearchBox from "./components/search-box/search-box.component";
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

const useSearchField = () => {
  const [searchField, setSearchField] = useState("");

  const handleSearchChange = event => {
    setSearchField(event.target.value);
  };

  return [searchField, handleSearchChange];
};

const App = () => {
  const monsters = useFetchMonsters();
  const [searchField, handleSearchChange] = useSearchField();

  const filteredMonsters = monsters.filter(monster =>
    monster.name.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <div className="App">
      <SearchBox
        placeholder="Search monster"
        handleChange={handleSearchChange}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
