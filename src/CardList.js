import React, { useImperativeHandle } from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  return robots.map((user, i) => {
    return (
      <Card
        key={user.id}
        name={user.name}
        id={user.id}
        email={user.email}
      ></Card>
    );
  });
};
export default CardList;
