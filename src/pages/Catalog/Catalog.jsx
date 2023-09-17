import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getData } from "../../utils/getData";
import Cart from "../../components/Cart/Cart";
import styles from "./Catalog.module.scss";

const Catalog = () => {
    const [products, setProducts] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getData();
            setProducts(data);
        };

        if (!products) {
            fetchData();
        }
    }, [products]);
    
    return (
        <div>
            <div className="catalog_fon">
                <h1>Аксессуары для Iphone</h1>
                <p></p>
            </div>

            <div className="product_item_all">
                
                {!products && <h2 className={styles.loading}>Loading...</h2>}
                
                {products &&
                    products?.map((item, i) => (
                    
                        <Cart
                        key={i.toString}
                        data={item}
                        className={styles.cart}
                        />

                    ))
                }
                
            
            </div>

            
            
        </div>
    );
};

export default Catalog;
