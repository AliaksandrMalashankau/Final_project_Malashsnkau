import { useState, useContext, useEffect } from "react";
import { CardContext } from "../App";
import Cart from "../components/Cart/Cart";
import { Link} from "react-router-dom";


const Card = () => {
    const { card, setCard } = useContext(CardContext);
    const [cardArr, setCardArr] = useState([]);

    useEffect(() => {
        if (card.size) {
            const keys = card.keys();
            const newCard = [];
            for (let key of keys) {
                newCard.push(card.get(key));
            }
            setCardArr(newCard);
        }
    }, [JSON.stringify(cardArr), card]);

    return (
        <div className="card">
            
            {!cardArr.length && <h3></h3>}
            {!cardArr.length && <h2>Корзина пуста</h2>}
            {!cardArr.length && <p>Но это никогда не поздно исправить !!!</p>}
            {!cardArr.length && <button className="button_card"><Link to={"/catalog"}>В каталог товаров</Link></button>}
            {!!cardArr.length &&
                cardArr.map((item, i) => (
                    <Cart key={i.toString()} data={item} />
                ))
            }
        </div>
    );
};

export default Card;
