import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { CardContext } from "../../App";
import { BsHeart } from "react-icons/bs";

const WidgetFavorites = () => {
    const { card } = useContext(CardContext);
    const [price, setPrice] = useState(0);

    useEffect(() => {
        if (card.size) {
            const keys = card.keys();
            let price = 0;
            for (let key of keys) {
                price += card.get(key).price * card.get(key).count;
            }
            setPrice(price);
        }
    }, [card, JSON.stringify(price)]);

    return (
        <div className="widgetFavorites">
            <Link to={"/cardFavorites"}>
            <div className="widgetFavorites_ps">
                    <div><BsHeart icon={['fal', 'code']} size="20px"/></div>
                    <div className="widgetFavorites_ps_size">{card.size}</div>
                </div>
                
            </Link>
        </div>
    );
};

export default WidgetFavorites;
