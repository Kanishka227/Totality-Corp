import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, selectCartInfo, selectTotalSum } from "../features/cart/cartSlice";
import { MdDelete } from "react-icons/md";
import styles from "./CartList.module.css"
import { useNavigate } from "react-router-dom";

const CartList = () => {
  const cartInfo = useSelector(selectCartInfo);
  const cartTotalSum = useSelector(selectTotalSum)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleDeleteFromCart = (id,price)=>{
    dispatch(removeFromCart({id,price}))  
  }
  return (
    <>
      <ul className="list-group">
        {cartInfo.map((cart) => (
          <li
            className="list-group-item d-flex justify-content-between align-items-center"
            key={cart.id}
          >
            <div>
              {cart.name} , {cart.city}{" "}
              <MdDelete
                className={styles.deleteIcon}
                onClick={() => handleDeleteFromCart(cart.id, cart.price)}
              />
            </div>
            <span className="badge text-bg-primary rounded-pill">
              {cart.price}
            </span>
          </li>
        ))}
      </ul>
      {cartTotalSum > 0 ? <ul className="list-group">
        <li className="list-group-item d-flex justify-content-between align-items-center">
          {" "}
          Total
          <span className="badge text-bg-danger rounded-pill">
            {cartTotalSum}
          </span>
        </li>
      </ul> : <div style={{textAlign: "center", fontSize: "1.5rem"}}>Your cart is currently empty</div>}
      {cartTotalSum > 0 && <ul className="list-group">
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <div></div>
          <span className="badge text rounded-pill">
            <button type="button" className="btn btn-success" onClick={() => navigate('/checkout')}>
              Proceed to checkout 
            </button>
          </span>
        </li>
      </ul>}
    </>
  );
};

export default CartList;
