import { useContext } from "react";
import { currencyFormatter } from "../util/formatting";
import Button from "./UI/Button";
import { useCart } from "../store/CartContext";

export default function MealItem({ meal }) {
    const cartCtx = useCart();
    function handleAddMealToCart() {
        cartCtx.addItem(meal);
    }
    // console.log(cartCtx.items)
  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">{currencyFormatter.format(meal.price)}</p>
          <p className="meal-item-desciption">{meal.description}</p>
        </div>
        <p className="meal-item-actions">
            <Button onClick={handleAddMealToCart}>Add to Cart</Button>
        </p>
      </article>
    </li>
  );
}
