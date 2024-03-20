import { CiHeart, CiShoppingCart } from "react-icons/ci";
import ProductCard from "./ProductCard";
import { PiEyeLight } from "react-icons/pi";

const BestSelling = () => {
    return (
        <>
            <div className="d-flex flex-row container mt-5">
                <a className="bg-danger me-2 py-4 rounded" style={{ width: "30px" }}></a>
                <h2 className="fs-6 align-self-center text-danger">This Month  </h2>
            </div >
            <div className="d-flex flex-row justify-between container">
                <h2 className="align-self-center fs-5 my-3">Best selling Products</h2>
                <div className="fs-3 text-end flex-grow-1">
                    <button className="btn btn-danger" style={{ fontSize: "10px" }}>View All</button>
                </div>
            </div>
            <div className="container">
                <div className="row  justify-content-between">
                    <div className="col-lg-2 position-relative prodCard">
                        <ProductCard />
                        <CiShoppingCart className="bg-danger rounded-circle text-light cartBtn " />
                        <CiHeart className="bg-light rounded-circle wishList bg-opacity-75" />
                        <PiEyeLight className="bg-light rounded-circle viewItem bg-opacity-75" />
                    </div>
                    <div className="col-lg-2 position-relative prodCard">
                        <ProductCard />
                        <CiShoppingCart className="bg-danger rounded-circle text-light cartBtn " />
                        <CiHeart className="bg-light rounded-circle wishList bg-opacity-75" />
                        <PiEyeLight className="bg-light rounded-circle viewItem bg-opacity-75" />
                    </div>

                    <div className="col-lg-2 position-relative prodCard">
                        <ProductCard />
                        <CiShoppingCart className="bg-danger rounded-circle text-light cartBtn " />
                        <CiHeart className="bg-light rounded-circle wishList bg-opacity-75" />
                        <PiEyeLight className="bg-light rounded-circle viewItem bg-opacity-75" />
                    </div>

                    <div className="col-lg-2 position-relative prodCard">
                        <ProductCard />
                        <CiShoppingCart className="bg-danger rounded-circle text-light cartBtn " />
                        <CiHeart className="bg-light rounded-circle wishList bg-opacity-75" />
                        <PiEyeLight className="bg-light rounded-circle viewItem bg-opacity-75" />
                    </div>

                    <div className="col-lg-2 position-relative prodCard">
                        <ProductCard />
                        <CiShoppingCart className="bg-danger rounded-circle text-light cartBtn " />
                        <CiHeart className="bg-light rounded-circle wishList bg-opacity-75" />
                        <PiEyeLight className="bg-light rounded-circle viewItem bg-opacity-75" />
                    </div>
                </div>
            </div >
        </>
    )
}

export default BestSelling;

