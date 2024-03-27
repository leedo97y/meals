import classes from "./meals-grid.module.css";
import MealsItem from "./meals-item";

const MealsGrid = ({ meals }) => {
  return (
    <ul className={classes.meals}>
      {meals.map((meal) => {
        <li key={meal.id}>
          <MealsItem {...meal} />
        </li>;
      })}
    </ul>
  );
};

export default MealsGrid;
