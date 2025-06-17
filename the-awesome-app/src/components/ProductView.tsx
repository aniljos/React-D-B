import type React from "react";
import {memo} from 'react';
import type { Product } from "../model/Product";

import './ListProducts.css';
//  <ProductView product={product} onDelete={handleDelete} onEdit={handleEdit}/>
type ProductViewProps = {
    product: Product,
    onDelete: (product: Product)=> Promise<void>;
    onEdit: (product: Product)=> void;
}

//function ProductView(props: ProductViewProps){
const ProductView: React.FC<ProductViewProps> = memo( ({ product, onDelete, onEdit }) => {

    console.log("rendering ProductView", product.id);
    return (
        <div className="product">
            <p>Id: {product.id}</p>
            <p>{product.name}</p>
            <p>{product.description}</p>
            <p>Price: {product.price}</p>

            <div>
                <button className="btn btn-danger" onClick={() => { onDelete(product) }}>Delete</button>&nbsp;
                <button className="btn btn-info" onClick={() => onEdit(product)}>Edit</button>
            </div>
        </div>
    )
})

export default ProductView;