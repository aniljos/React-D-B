import axios from "axios";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Product } from "../model/Product";
import './ListProducts.css';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { AppState } from "../redux/store";
import ProductView from "./ProductView";
import { useTitle } from "../hooks/useTitle";

//const url = "http://localhost:9000/products";
const url = "http://localhost:9000/secure_products";
function ListProducts() {


    const [products, setProducts] = useState<Product[]>([]);
    const [isMessageVisible, setVisible] = useState(false);
    const auth = useSelector((state: AppState) => state.auth);
    useTitle("Products");

    useEffect(() => {

        fetchProducts();

    }, [])
    const navigate = useNavigate()

    async function fetchProducts() {

        try {

            if(!auth.isAuthenticated){
                navigate("/login");
                return;
            }

            const headers = {"Authorization": `Bearer ${auth.accessToken}`};
            const response = await axios.get<Product []>(url, {headers});
            console.log("products", response.data);
            setProducts(response.data);


        } catch (error) {

            console.log("failed to fetch products", error);
        }
    }

    const handleDelete = useCallback( async (product: Product) => {

        const deleteUrl = url + "/" + product.id;
        try {
          
            const headers = {"Authorization": `Bearer ${auth.accessToken}`};
            await axios.delete(deleteUrl, {headers});
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

    }, [products])

    const handleEdit = useCallback( (product: Product) => {

        navigate("/products/" + product.id);

    }, [])

    const totalPrice = useMemo( () => {

        console.log("calculating total price...");
        let tPrice = 0;
        products.forEach(prd => {

            tPrice += prd.price;
        })
        return tPrice;

    }, [products])

    return (
        <div>
            <h3>List Products</h3>

            <div className="alert alert-secondary">Total Price: {totalPrice}</div>

            {isMessageVisible ? <div className="alert alert-info">React page to demonstrate data-driven application</div> : null}
            <button className="btn btn-info" onClick={() => setVisible(pValue => !pValue)}> {isMessageVisible? 'Hide' : 'Show'}</button>

            <div style={{display: "flex", flexFlow: 'row wrap', justifyContent: 'center'}}>
                {products.map(product => {

                    return (
                       <ProductView key={product.id} product={product} onDelete={handleDelete} onEdit={handleEdit}/>
                    )

                })}
            </div>
        </div>
    )
}

export default ListProducts;