import { useState, useContext, useEffect } from "react";
import { CardContext } from "../../App";
import { Link } from "react-router-dom";
import styles from "./Cart.module.scss";
import classNames from "classnames";
import { BsHeart } from "react-icons/bs";


const Cart = (props) => {
    const { id, title, price, image, description: desc } = props.data;
    const { className } = props;
    const { card, setCard } = useContext(CardContext);
    const [added, setAdded] = useState(false);

    
    const mainClass = classNames(styles.product_cart, className);

    const addToCard = () => {
        const data = {
            ...props.data,
            count: 1,
        };

        let newCard = new Map([...card]);
        newCard.set(id, data);
        setCard(newCard);
        console.log(...newCard);
        setAdded(!added);
    };

    const removeInCard = () => {
        let newCard = new Map([...card]);
        newCard.delete(id);
        setCard(newCard);
        setAdded(!added);
    };

    const productCounter = (direction) => {
        if (!card.get(id)) return;
        const item = card.get(id);
        if (direction) {
            item.count += 1;
        } else {
            if (item.count > 0) {
                item.count -= 1;
            }
        }
        const newCard = new Map([...card]);
        newCard.set(id, item);
        setCard(newCard);
    };

    useEffect(() => {
        if (card.get(id)) {
            setAdded(true);
        }
    }, []);

    return (
        <div className="product_item">
            <div className="product_item_bsheart"><BsHeart icon={['fal', 'code']} size="20px" onClick={addToCard}/></div>
            <div
                className="img"
                // style={{
                //     width: 250,
                // }}
            >
                <Link to={`/product/${id}`}>
                    <img
                        // style={{
                        //     width: "150px",
                        //     height: "290px",
                        //     margin: "0 auto"
                        // }}
                        src={image}
                        alt={title}
                    />
                </Link>
            </div>
            <h2 className="title">
                <Link to={`/product/${id}`}>{title}</Link>
            </h2>
            <p className="desc">{desc}</p>
            <span>{price} $</span>
            <div className="buttons">
                {added && (
                    <div className="buttons__added">
                        <div className="counter">
                            <button onClick={() => productCounter(1)}>+</button>
                            <input type="text" value={card.get(id).count} />
                            <button onClick={() => productCounter(0)}>-</button>
                        </div>
                        <button className="add_to_card" onClick={removeInCard}>удалить из корзины</button>
                        {/* <button><Link to="/decor">Оформить</Link> </button> */}
                    </div>
                )}
                {!added && <button className="add_to_card" onClick={addToCard}>добавить в корзину</button>}
                

            </div>
        </div>
        
    );
};

export default Cart;
