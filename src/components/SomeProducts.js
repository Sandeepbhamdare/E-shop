import { CiHeart, CiShoppingCart } from "react-icons/ci";
import ProductCard from "./ProductCard";
import { PiEyeLight } from "react-icons/pi";

const SomeProducts = () => {

    return (
        <>
            <div className="d-flex flex-row container mt-5">
                <a className="bg-danger me-2 py-4 rounded" style={{ width: "30px" }}></a>
                <h2 className="fs-6 align-self-center text-danger"> Our Products</h2>
            </div >
            <div className="d-flex flex-row justify-between container">
                <h2 className="align-self-center fs-5 my-3">Explore Our Products</h2>
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
                <div className="row  justify-content-between my-3">
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
                <button className="btn btn-danger rounded-1" style={{ width: "200px" }}>Explore More</button>
            </div>
        </>
    )
}

export default SomeProducts;