import axios from "axios";
import { useEffect, useState } from "react";

const url = "http://localhost:9000/products";
function ListProducts() {


    const [products, setProducts] = useState([]);
    useEffect(() => {

        fetchProducts();

    }, [])

    async function fetchProducts() {

        try {

            const response = await axios.get(url);
            console.log("products", response.data);
            setProducts(response.data);


        } catch (error) {

            console.log("failed to fetch products", error);
        }
    }

    return (
        <div>
            <h3>List Products</h3>

            <div>
                {products.map(product => {

                    return (
                        <div>
                            <p>Id: {product.id}</p>
                            <p>{product.name}</p>
                            <p>{product.description}</p>
                            <p>Price: {product.price}</p>
                        </div>
                    )

                })}
            </div>
        </div>
    )
}

export default ListProducts;