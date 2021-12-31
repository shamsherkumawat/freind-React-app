import React, { useState } from "react";
import CardList from "./CardList";
import { robots } from "./mockData/friends";
import SearchBox from "./SearchBox";
import "./main.css";

const Main = () => {
  const [stateData, setStateData] = useState({
    robots: robots,
    searchField: "",
  });
  const onSearchChange = (event) => {
    setStateData({ ...stateData, searchField: event.target.value });
  };
  const filteredRobots = () => {
    const filterFriends = stateData.robots.filter((robot) => {
      return robot.name.toLowerCase().includes(stateData.searchField);
    });
    return filterFriends;
  };
  return (
    <div className="tc">
      <h1> Friends App</h1>
      <SearchBox searchChange={onSearchChange} />
      <CardList robots={filteredRobots()} />
    </div>
  );
};
export default Main;
