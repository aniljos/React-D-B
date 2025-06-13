import axios from "axios";
import { useEffect, useState, type ChangeEvent } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../model/Product";

function EditProduct(){

    const params = useParams();
    const productId = params.id;
    const [product, setProduct] = useState<Product>(new Product(0, "", "", 0, ""));

    useEffect(() => {

        fetchProduct();

    }, [])

    async function fetchProduct(){

        try {
            const url = "http://localhost:9000/products/" + productId;
            const response = await axios.get<Product>(url);
            setProduct(response.data);
        } catch (error) {

            console.log("error fetch ", error);
        }
    }

    function handleNameChange(evt: ChangeEvent<HTMLInputElement>){

        // const value = evt.target.value;
        // //product.name = value; // mutating the state(inccorrect)
        // const copy_of_product = {...product};
        // copy_of_product.name = value;
        // setProduct(copy_of_product);

        setProduct({...product, name: evt.target.value});
    }

    return (
        <div>
            <h4>Edit Product: {productId}</h4>

            <form>

                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" value={product.name} onChange={handleNameChange}/>
                </div>

                <div className="form-group">
                    <label htmlFor="name">Description</label>
                    <input type="text" className="form-control" value={product.description} 
                                    onChange={e => setProduct({...product, description: e.target.value})}/>
                </div>

                <div className="form-group">
                    <label htmlFor="name">Price</label>
                    <input type="number" className="form-control" value={product.price} 
                                    onChange={e => setProduct({...product, price: Number(e.target.value)})}/>
                </div>
                <br />

                <div>
                    <button className="btn btn-primary">Save</button>&nbsp;
                    <button className="btn btn-secondary">Cancel</button>
                </div>


            </form>

        </div>
    )
}

export default EditProduct;
