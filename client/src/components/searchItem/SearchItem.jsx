import { Link } from "react-router-dom";
import "./searchItem.scss";

const SearchItem = ({ item }) => {
  if (!item) {
    return null;
  }
  return (
    <div className="searchItem">
      <img src={item.photos[0]} alt="" className="searchItem__img" />
      <div className="searchItem__desc">
        <h1 className="searchItem__title">{item.name}</h1>
        <span className="searchItem__distance">{item.distance}m from center</span>
        <span className="searchItem__taxiOp">Available Now!</span>
        <span className="searchItem__subtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="searchItem__features">{item.description}</span>
        <span className="searchItem__cancelOp">Free cancellation</span>
        <span className="searchItem__cancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="searchItem__details">
        {item.rating && (
          <div className="searchItem__rating">
            <span>Excellent</span>
            <button>{item.rating}</button>
          </div>
        )}
        <div className="searchItem__detailTexts">
          <span className="searchItem__price">${item.roomPrice}</span>
          <span className="searchItem__taxOp">Includes taxes and fees</span>
          <Link to={`http://localhost:3000/properties/${item._id}`}>
            <button className="searchItem__checkButton">See availability</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
