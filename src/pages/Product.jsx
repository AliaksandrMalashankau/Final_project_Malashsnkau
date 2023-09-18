import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { getProduct } from "../utils/getData";
import { Link} from "react-router-dom";
import { AiOutlineStar } from "react-icons/ai";

const Product = () => {
    const [product, setProduct] = useState(null);
    const id = useParams();
    // const [value, loading, error] = 

    useEffect(() => {
        const data = async () => {
            const data = await getProduct(id.id);
            setProduct(data);
        };

        if (!product) {
            data();
        }
    }, [product]);
    
    return (
        <div className="container">
            {!product && <h2>Loading...</h2>}
            {product && (
                <div className="product__main">
                    <div
                        className="img"
                        // style={{
                        //     width: 400,
                        //     marginLeft: 150
                        // }}
                    >
                        <img
                            src={product.image}
                            alt={product.title}
                            // style={{
                            //     width: "100%",
                            // }}
                        />
                    </div>
                    <span className="rating"> <AiOutlineStar/>    {product.rating.rate}</span>
                    <span className="price">{product.price} $</span>
                    <h2 className="title">{product.title}</h2>
                    <p className="desc">{product.description}</p>
                    <button className="button_card"><Link to={"/catalog"}>В каталог товаров</Link></button>
                </div>
            )}
        </div>
    );
};

export default Product;
