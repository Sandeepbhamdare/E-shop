import { Link } from "react-router-dom";

const BillingDetails = () => {

    return (
        <>
            <nav aria-label="breadcrumb" className="container my-5" style={{ fontSize: "15px" }}>
                <ol className="breadcrumb text-secondary">
                    <li className="breadcrumb-item"><Link to="/" className="text-secondary">Home</Link></li>
                    <li className="breadcrumb-item">My Account</li>
                    <li className="breadcrumb-item" >Product</li>
                    <li className="breadcrumb-item" ><Link to="/cart" className="text-secondary">View Cart</Link></li>
                    <li className="breadcrumb-item text-dark" aria-current="page">checkOut</li>
                </ol>
            </nav>
            <div className=" container d-flex flex-row justify-content-around mb-4">
                <form className="fs-6">
                    <div className="mb-3">
                        <label htmlFor="userName" className="form-label">User Name <span className="text-danger">*</span></label>
                        <input type="text" className="form-control bg-secondary bg-opacity-25" id="userName" />
                    </div>
                    <div className="mb-3">
                        <label for="InputAddress" className="form-label">Address<span className="text-danger">*</span></label>
                        <input type="text" className="form-control bg-secondary bg-opacity-25" id="InputAddress" />
                    </div>

                    <div className="mb-3">
                        <label for="InputHouseNo" className="form-label">House,Appartment,Floor,etc<span className="text-danger">*</span></label>
                        <input type="text" className="form-control bg-secondary bg-opacity-25" id="InputHouseNo" />
                    </div>
                    <div className="mb-3">
                        <label for="InputTown" className="form-label">Town/City<span className="text-danger">*</span></label>
                        <input type="text" className="form-control bg-secondary bg-opacity-25" id="InputTown" />
                    </div>
                    <div className="mb-3">
                        <label for="InputPhoneNo" className="form-label">Phone Number</label>
                        <input type="tel" className="form-control bg-secondary bg-opacity-25" id="InputPhoneNo" />
                    </div>
                    <div className="mb-3">
                        <label for="InputEmail" className="form-label">Email address<span className="text-danger">*</span></label>
                        <input type="email" className="form-control bg-secondary bg-opacity-25" id="InputEmail" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="Check"/>
                            <label className="form-check-label" for="Check1">Save this information for faster check-out next time</label>
                    </div>
                </form>

                <ul className="billingDetails px-3">
                    <li >
                        <p>
                            <img src="./pro (23).png" width={"30px"} />
                            <span className="ms-3">Men's Causal Shirt</span>
                        </p>
                        <p>Rs. 550</p>
                    </li>
                    <li>
                        <p>
                            <img src="./pro (23).png" width={"30px"} />
                            <span className="ms-3">Men's Causal Shirt</span>
                        </p>
                        <p>Rs. 550</p>
                    </li>
                    <li className="border-bottom">
                        <p>Subtotal</p>
                        <p>Rs. 1100</p>
                    </li>
                    <li className="border-bottom">
                        <p>Shipping</p>
                        <p>Free</p>
                    </li>
                    <li>
                        <p>Total</p>
                        <p>Rs. 1100</p>
                    </li>
                    <li>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label className="form-check-label" for="flexRadioDefault1">
                                Bank
                            </label>
                        </div>
                        <div className="bankImg">
                            <img src="./rupay.png" />
                            <img src="./mastercard.png" />
                            <img src="./visa.png" />
                            <img src="./dinersclub.png" />
                        </div>
                    </li>
                    <li className="text-start">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                            <label className="form-check-label" for="flexRadioDefault2">
                                Cash on delivery
                            </label>
                        </div>
                    </li>
                    <li>
                        <form className="row g-3">
                            <div className="col-auto">
                                <input type="text" className="form-control border-dark" placeholder="Coupon Code" />
                            </div>
                            <div className="col-auto">
                                <button type="submit" className="btn btn-danger rounded-1 mb-3" style={{ fontSize: "12px", width: "175px" }}>Apply Coupon</button>
                            </div>
                        </form>
                    </li>
                    <button className="btn btn-danger rounded-1 mb-3" style={{ fontSize: "12px", width: "175px" }}>
                        Place Order
                    </button>
                </ul>
            </div>

        </>
    )
}

export default BillingDetails;