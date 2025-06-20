import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import type { AppState } from "../redux/store";
import { useNavigate } from "react-router-dom";
import type { Product } from "../model/Product";
import axios from "axios";

export function useProducts(url: string){

    const [products, setProducts] = useState<Product[]>([]);
    const auth = useSelector((state: AppState) => state.auth);
    const navigate = useNavigate();

     useEffect(() => {

        fetchProducts();

    }, [])
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

    return {products, setProducts, auth};
}