import React, { useContext, useState } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({ id, name, price, description, image }) => {
 
    const [itemCount, setItemCount] = useState(0);
  const {cartItems,addToCart,removeFromCart} = useContext(StoreContext);
    const incrementItemCount = () => {
        setItemCount(prev => prev + 1);
    };

    const decrementItemCount = () => {
        setItemCount(prev => (prev > 0 ? prev - 1 : 0));
    };

    return (
        <div className="food-item">
            <div className="food-item-img-container">
                <img className="food-item-image" src={image} alt={`${name}`} />
                {!itemCount ? (
                    <img
                        className="add"
                        onClick={incrementItemCount}
                        src={assets.add_icon_white}
                        alt="Add item"
                    />
                ) : (
                    <div className="food-item-counter">
                        <img
                            onClick={decrementItemCount}
                            src={assets.remove_icon_red}
                            alt="Remove item"
                        />
                        <p>{itemCount}</p>
                        <img
                            onClick={incrementItemCount}
                            src={assets.add_icon_green}
                            alt="Add item"
                        />
                    </div>
                )}
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="Rating stars" />
                </div>
                <p className="food-item-desc">{description}</p>
                <p className="food-item-price">${price}</p>
            </div>
        </div>
    );
};

export default FoodItem;
