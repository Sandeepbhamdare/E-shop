import { FaStar } from "react-icons/fa6";

const ProductCard = () => {
    return (
        <>
            <div className="card position-relative" style={{ width: "230px" }}>
                <p className="bg-danger text-light position-absolute mx-2 rounded p-1" style={{ fontSize: "10px" }}>-30%</p>
                <img src={"/pro (23).png"} className="card-img px-2" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Men's Causal Shirt</h5>
                    <p className="card-text text-danger m-0">Rs. 550 <span className="text-decoration-line-through text-secondary text-opacity-75" style={{ fontSize: "12px" }} >Rs. 1000</span> </p>
                    <div className="text-warning">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <span className="text-secondary text-opacity-50 fs-6">
                            (80)
                        </span>
                    </div>

                </div>
              
            </div>
        </>
    )
}

export default ProductCard;