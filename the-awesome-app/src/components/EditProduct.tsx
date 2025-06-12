import { useParams } from "react-router-dom";

function EditProduct(){

    const params = useParams();
    const productId = params.id;

    return (
        <div>
            <h4>Edit Product: {productId}</h4>
        </div>
    )
}

export default EditProduct;
