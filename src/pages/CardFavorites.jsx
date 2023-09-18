import { useState, useContext, useEffect } from "react";
import CartFavorites from "../components/Cart/CartFavorites";
import { BsHeart } from "react-icons/bs";
import { Link} from "react-router-dom";
import { FavoriteContext } from "../App";

const CardFavorites = () => {
    const { fav, setFav } = useContext(FavoriteContext);
    const [cardArr, setCardArr] = useState([]);

    useEffect(() => {
        if (fav.size) {
            const keys = fav.keys();
            const newCard = [];
            for (let key of keys) {
                newCard.push(fav.get(key));
            }
            setCardArr(newCard);
        }
    }, [JSON.stringify(cardArr), fav]);

    return (
        
        <div className="cartfavorites">
            {!cardArr.length && <h3><BsHeart icon={['fal', 'code']} size="90px"/></h3>}
            {!cardArr.length && <h2> Избранное пусто</h2>}
            {!cardArr.length && <button className="button_card"><Link to={"/catalog"}>В каталог товаров</Link></button>}
            {!!cardArr.length &&
                cardArr.map((item, i) => (
                    <CartFavorites key={i.toString()} data={item} />
                ))}
        </div>
    );
};

export default CardFavorites;
