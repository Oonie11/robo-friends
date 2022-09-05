import React from "react";
import Card from "./Card.js";

// we are writing robots in {} in parameter section because we are destructuring props. Ex:- {robots} = props; instead of writing this whole expression we are directly writing {robots} as argument.
const CardList = ({ robots }) => {
  return robots.map((each) => {
    return (
      <Card key={each.id} id={each.id} name={each.name} email={each.email} />
    );
  });
};

export default CardList;
