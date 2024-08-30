import { useDispatch, useSelector } from "react-redux";
import { reset, selectTotalSum } from "../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const cartTotalSum = useSelector(selectTotalSum)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleConfirmButton = () => {
    dispatch(reset())
    alert("Your transaction is successfully completed !")
    navigate('/')
  }
  return (
    <div
      style={{
        height: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h3 style={{ marginBottom: "1em" }}>Checkout</h3>
      <div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            First Name
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            LastName
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="input-group">
          <span className="input-group-text">Address</span>
          <textarea
            className="form-control"
            aria-label="With textarea"
          ></textarea>
        </div>
        <div className="form-check" style={{margin: "1em 0"}}>
          <input className="form-check-input" type="checkbox" />
          <label className="form-check-label">COD</label>
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleConfirmButton}>
          Click to confirm payment of {cartTotalSum}
        </button>
      </div>
    </div>
  );
};
export default Checkout;
