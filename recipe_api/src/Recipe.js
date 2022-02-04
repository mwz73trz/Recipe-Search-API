import React from "react";
import style from "./recipe.modules.css";

const Recipe = ({ key, title, calories, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h1 className={style.h1}>{title}</h1>
      <img className={style.image} src={image} alt={title} />
      <ol className={style.ingredients}>
        {ingredients.map((ingredients) => (
          <li key={key}>{ingredients.text}</li>
        ))}
      </ol>
      <p>Calories: {calories}</p>
    </div>
  );
};

export default Recipe;
