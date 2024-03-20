import { PiEyeLight, PiTrashLight } from "react-icons/pi";
import ProductCard from "../components/ProductCard";
import { CiHeart, CiShoppingCart } from "react-icons/ci";

const Wishlist = () => {

    return (
        <>
            <div className="d-flex flex-row container mt-5">
                <a className="bg-danger me-2 py-4 rounded" style={{ width: "30px" }}></a>
                <h2 className="fs-6 align-self-center"> Wishlist (<span className="text-danger">2</span>)</h2>
            </div >
            <div className="container my-4">
                <div className="row justify-content-between">
                    <div className="col-lg-2 position-relative prodCard">
                        <ProductCard />
                        <PiTrashLight className="bg-light rounded-circle bg-opacity-75 deleteWish" />
                        <CiShoppingCart className="bg-danger rounded-circle text-light cartBtn " />
                    </div>

                    <div className="col-lg-2 position-relative prodCard">
                        <ProductCard />
                        <PiTrashLight className="bg-light rounded-circle bg-opacity-75 deleteWish" />
                        <CiShoppingCart className="bg-danger rounded-circle text-light cartBtn " />  
                    </div>

                    <div className="col-lg-2 position-relative prodCard">
                        <ProductCard />
                        <PiTrashLight className="bg-light rounded-circle bg-opacity-75 deleteWish" />
                        <CiShoppingCart className="bg-danger rounded-circle text-light cartBtn " />
                    </div>

                    <div className="col-lg-2 position-relative prodCard">
                        <ProductCard />
                        <PiTrashLight className="bg-light rounded-circle bg-opacity-75 deleteWish" />
                        <CiShoppingCart className="bg-danger rounded-circle text-light cartBtn " />
                    </div>

                    <div className="col-lg-2 position-relative prodCard">
                        <ProductCard />
                        <PiTrashLight className="bg-light rounded-circle bg-opacity-75 deleteWish" />
                        <CiShoppingCart className="bg-danger rounded-circle text-light cartBtn " />
                    </div>

                </div>

            </div >
        </>
    )
}
export default Wishlist;