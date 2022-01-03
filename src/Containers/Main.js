import React, { useState, useEffect } from "react";
import CardList from "../Components/CardList";
import { robots } from "../mockData/friends";
import SearchBox from "../Components/SearchBox";
import "./main.css";
import Scroll from "../Components/Scroll";

const Main = () => {
  const [stateData, setStateData] = useState({
    robots: robots,
    searchField: "",
  });

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        setStateData({ ...stateData, robots: users });
      });
  }, []);
  const onSearchChange = (event) => {
    setStateData({ ...stateData, searchField: event.target.value });
  };
  // const filteredRobots = () => {
  const filterFriends = stateData.robots.filter((robot) => {
    return robot.name.toLowerCase().includes(stateData.searchField);
  });
  // return filterFriends;
  // };
  return (
    <div className="tc">
      <h1> Friends App</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <CardList robots={filterFriends} />
      </Scroll>
    </div>
  );
};
export default Main;
