import { FaHeadset, FaTruckFast } from "react-icons/fa6";
import { MdPrivacyTip } from "react-icons/md";

const Featured = () => {
    return (
        <>
            <div className="d-flex flex-row container mt-5">
                <a className="bg-danger me-2 py-4 rounded" style={{ width: "30px" }}></a>
                <h2 className="fs-6 align-self-center text-danger"> Featured </h2>
            </div >
            <div className="d-flex flex-row justify-between container">
                <h2 className="align-self-center fs-5 my-3">New Arrival</h2>
            </div>

            <div className="container p-3 my-3 ">
                <div className="row mx-auto" style={{ height: "22rem", width: "60rem" }}>
                    <div className="col-lg-6 featured p-0 rounded" style={{ backgroundImage: "url(./featured1.png)" }}>
                        <div className="featured-des">
                            <h1 className="fs-4">PlayStation 5</h1>
                            <p className="m-0">Black and White edition of the PS5 <br />
                                Coming out on sale.</p>
                            <h4 className="fs-5 pt-1 text-decoration-underline">Shop Now</h4>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="h-50 featured rounded-1" style={{ backgroundImage: "url(./featured2.png)" }}>
                            <div className="featured-des">
                                <h1 className="fs-4">Women's Collections</h1>
                                <p className="m-0">Featured women collections that  <br />
                                    Give you another vibe.</p>
                                <h4 className="fs-5 pt-1 text-decoration-underline">Shop Now</h4>
                            </div>
                        </div>

                        <div className="h-50 d-flex flex-row">
                            <div className=" w-75 featured m-Featured rounded-1" style={{ backgroundImage: "url(./featured3.png)" }}>
                                <div className="featured-des">
                                    <h1 className="fs-4">Speakers</h1>
                                    <p className="m-0">Best wireless speakers.</p>
                                    <h4 className="fs-5 pt-1 text-decoration-underline">Shop Now</h4>
                                </div>
                            </div>

                            <div className=" w-75 featured m-featured rounded-1" style={{ backgroundImage: "url(./featured4.png)" }}>
                                <div className="featured-des">
                                    <h1 className="fs-4">Perfume</h1>
                                    <p className="m-0">Get perfume at great price.</p>
                                    <h4 className="fs-5 pt-1 text-decoration-underline">Shop Now</h4>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="container py-5">
                <ul className="d-flex flex-row justify-content-center text-center align-item-center">
                    <li className="mx-5">
                        <div className="bg-dark featured-Icons my-4">
                            <FaTruckFast className="fs-4 text-light m-2 " />
                        </div>
                        <h3 className="fs-5 text-uppercase mb-1">Free and fast delivery</h3>
                        <p style={{ fontSize: "13px" }}>Free delivery for all orders over Rs.110</p>
                    </li>

                    <li className="mx-5">
                        <div className="bg-dark featured-Icons my-4">
                            <FaHeadset className="fs-4 text-light m-2 " />
                        </div>
                        <h3 className="fs-5 text-uppercase mb-1">24/7 customer service</h3>
                        <p style={{ fontSize: "13px" }}>Friendly 24/7 customer support</p>
                    </li>

                    <li className="mx-5">
                        <div className="bg-dark featured-Icons my-4">
                            <MdPrivacyTip className="fs-4 text-light m-2 " />
                        </div>
                        <h3 className="fs-5 text-uppercase mb-1">Money back policy</h3>
                        <p style={{ fontSize: "13px" }}>we return money within 30 days</p>
                    </li>
                </ul>
            </div>
        </>
    )
}
export default Featured;