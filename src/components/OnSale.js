import Timer from "./Timer";
import ProductCard from "./ProductCard";
import { CiHeart, CiShoppingCart } from "react-icons/ci";
import { PiEyeLight } from "react-icons/pi";

const ForSale = () => {

    return (
        <>
            <div className="d-flex flex-row container mt-5">
                <a className="bg-danger me-2 py-4 rounded" style={{ width: "30px" }}></a>
                <h2 className="fs-6 align-self-center text-danger"> Today's  </h2>
            </div >
            <Timer />
            <div className="container">
                <div className="row justify-content-between">
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
            <div className="p-5 text-center">
                <button className="btn btn-danger rounded-1" style={{ width: "200px" }}>Show More</button>
            </div>
        </>
    )

}

export default ForSale;