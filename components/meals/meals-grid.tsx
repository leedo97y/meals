import { Key } from "react";
import classes from "./meals-grid.module.css";
import MealsItem from "./meals-item";

const MealsGrid = ({ meals }: any) => {
  return (
    <ul className={classes.meals}>
      {meals.map((meal: { id: Key | null | undefined }) => {
        <li key={meal.id}>
          <MealsItem {...meal} />
        </li>;
      })}
    </ul>
  );
};

export default MealsGrid;
