import axios from "axios";
import { useEffect, useState } from "react";
import { Product } from "../model/Product";
import './ListProducts.css';
import { useNavigate } from "react-router-dom";

const url = "http://localhost:9000/products";
function ListProducts() {

    const [products, setProducts] = useState<Product[]>([]);
    useEffect(() => {

        fetchProducts();

    }, [])
    const navigate = useNavigate()

    async function fetchProducts() {

        try {

            const response = await axios.get<Product []>(url);
            console.log("products", response.data);
            setProducts(response.data);


        } catch (error) {

            console.log("failed to fetch products", error);
        }
    }

    async function handleDelete(product: Product){

        const deleteUrl = url + "/" + product.id;
        try {
          
            await axios.delete(deleteUrl);
            //fetchProducts();
            // copy of products
            const copy_of_products = [...products];

            const index = copy_of_products.findIndex(item => item.id === product.id);
            if(index !== -1){
                copy_of_products.splice(index, 1);
                setProducts(copy_of_products);
            }

            alert("deleted product with id "+ product.id);

        } catch {
            
            alert("Failed to delete product with id "+ product.id);
        }

    }

    function handleEdit(product: Product){

        navigate("/products/" + product.id);
    }

    return (
        <div>
            <h3>List Products</h3>

            <div style={{display: "flex", flexFlow: 'row wrap', justifyContent: 'center'}}>
                {products.map(product => {

                    return (
                        <div key={product.id} className="product">
                            <p>Id: {product.id}</p>
                            <p>{product.name}</p>
                            <p>{product.description}</p>
                            <p>Price: {product.price}</p>

                            <div>
                                <button className="btn btn-danger" onClick={() => {handleDelete(product)}}>Delete</button>&nbsp;
                                <button className="btn btn-info" onClick={() => handleEdit(product)}>Edit</button>
                            </div>
                        </div>
                    )

                })}
            </div>
        </div>
    )
}

export default ListProducts;