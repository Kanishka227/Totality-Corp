import { useDispatch, useSelector } from "react-redux";
import { selectPropertyList } from "../features/propertyList/propertyListSlice";
import styles from "./PropertyList.module.css";
import { addToCart, removeFromCart, selectCartInfo} from "../features/cart/cartSlice";


const PropertyList = () => {
  const propertyList = useSelector(selectPropertyList);
  const cartInfo = useSelector(selectCartInfo)
  const dispatch = useDispatch();
  const handleAddToCartButton = (id, name, price, city) => {
    if(isPropertyInCart(id)){
      dispatch(removeFromCart({id,price}))
    }
    else dispatch(addToCart({ id, name, price, city }));
  };
  function isPropertyInCart(id){
    return cartInfo.some((cartItem) => cartItem.id === id)
  }
  return (
    <div className={styles.container}>
      {propertyList.map((property) => (
        <div
          key={property.id}
          className={`${styles.cardComponent}card`}
          style={{ width: "18rem", border: "none" }}
        >
          <img
            src={property.img}
            className={`${styles.image} card-img-top`}
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{property.name}</h5>
            <p className="card-text">
              Price: {property.price} ,{" "}
              <span>Bedrooms: {property.bedrooms}</span>
            </p>
            <p>{property.location.address},</p>
            <p>
              {property.location.city} , {property.location.state}{" "}
            </p>
            <p>
              {property.location.country} ,{property.location.zipCode}
            </p>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() =>
                handleAddToCartButton(
                  property.id,
                  property.name,
                  property.price,
                  property.location.city
                )
              }
            >
              {(isPropertyInCart(property.id) ? "Remove From Cart" : "Add To Cart")}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default PropertyList;
