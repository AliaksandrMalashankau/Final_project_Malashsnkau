import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { FavoriteContext } from "../../App";
import { BsHeart } from "react-icons/bs";

const WidgetFavorites = () => {
    const { fav } = useContext(FavoriteContext);
    const [price, setPrice] = useState(0);

    useEffect(() => {
        if (fav.size) {
            const keys = fav.keys();
            let price = 0;
            for (let key of keys) {
                price += fav.get(key).price * fav.get(key).count;
            }
            setPrice(price);
        }
    }, [fav, JSON.stringify(price)]);

    return (
        
        <Link to={"/cardFavorites"}>
            <div className="widgetFavorites_ps">
                <div><BsHeart icon={['fal', 'code']} size="20px"/></div>
                <div className="widgetFavorites_ps_size">{fav.size}</div>
            </div>
            
        </Link>
    
    );
};

export default WidgetFavorites;
