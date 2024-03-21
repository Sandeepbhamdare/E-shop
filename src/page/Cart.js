import { CiCircleRemove } from "react-icons/ci";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Cart = () => {
    return (
        <>
            <nav aria-label="breadcrumb" className="container my-3" style={{ fontSize: "15px" }}>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item text-secondary"><a>Home</a></li>
                    <li className="breadcrumb-item active text-dark" aria-current="page">Library</li>
                </ol>
            </nav>
            <table className="table table-hover container text-center">

                <thead>
                    <tr>
                        <th scope="col">Product</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Subtotal</th>
                        <th scope="col">Remove</th>
                    </tr>
                </thead>
                <tbody >
                    <tr>
                        <td>
                            <img src="./pro (23).png" width={"50px"} />
                            &nbsp; Men's Causal Shirt
                        </td>
                        <td className="py-4">Rs. 550</td>
                        <td className="py-4">
                            <div className="d-flex flex-row">
                                <input className="text-center border border-secondary border-end-0 rounded-start" style={{ width: "50px" }} type="number" value={0} readOnly />
                                <div className="d-flex flex-column border border-secondary border-start-0 rounded-end">
                                    <IoIosArrowUp />
                                    <IoIosArrowDown />
                                </div>
                            </div>
                        </td>

                        <td className="py-4">
                            Rs. 550
                        </td>
                        <td className="py-4">
                            <CiCircleRemove className="fs-3 text-danger" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src="./pro (23).png" width={"50px"} />
                            &nbsp; Men's Causal Shirt
                        </td>
                        <td className="py-4">Rs. 550</td>
                        <td className="py-4">
                            <div className="d-flex flex-row">
                                <input className="text-center border border-secondary border-end-0 rounded-start" style={{ width: "50px" }} type="number" value={0} readOnly />
                                <div className="d-flex flex-column border border-secondary border-start-0 rounded-end">
                                    <IoIosArrowUp />
                                    <IoIosArrowDown />
                                </div>
                            </div>
                        </td>

                        <td className="py-4">
                            Rs. 550
                        </td>
                        <td className="py-4">
                            <CiCircleRemove className="fs-3 text-danger " />
                        </td>
                    </tr>
                </tbody>
            </table>

            <div className="container m-5 d-flex flex-row justify-content-between">
                <button className="btn btn-outline-dark rounded-1">Return To Shop</button>
                <button className="btn btn-outline-dark rounded-1">Update Cart</button>
            </div>
            <div className="container my-5 d-flex flex-row justify-content-around">
                <form className="row g-3">
                    <div className="col-auto">
                        <input type="text" className="form-control border-dark" placeholder="Coupon Code" />
                    </div>
                    <div className="col-auto">
                        <button type="submit" className="btn btn-danger rounded-1 mb-3" style={{ fontSize: "12px", width: "175px" }}>Apply Coupon</button>
                    </div>
                </form>
                <div className=" border border-dark p-3" style={{ width: "320px" }}>
                    <h3 style={{ fontSize: "16px" }}>Cart Total</h3>
                    <ul className="p-0 m-0">
                        <li className="d-flex flex-row justify-content-between border-bottom pt-2">
                            <p>Subtotal:</p>
                            <p>Rs. 1100</p>
                        </li>
                        <li className="d-flex flex-row justify-content-between border-bottom pt-2">
                            <p>Shipping:</p>
                            <p>Free</p>
                        </li>
                        <li className="d-flex flex-row justify-content-between pt-2">
                            <p>Total:</p>
                            <p>Rs. 1100</p>
                        </li>
                        <li >
                            <button className="btn btn-danger" style={{ fontSize: "13px", width: "100%" }}>Procees to checkout</button>
                        </li>
                    </ul>
                </div>
            </div>

        </>
    )
}

export default Cart;