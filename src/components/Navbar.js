import "../App.css";
import { CiSearch, CiHeart, CiShoppingCart, CiUser, CiStar, CiLogout } from "react-icons/ci";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { PiShoppingBagOpenThin } from "react-icons/pi";
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light border border-end-0 py-3"  >
                <div className="container">
                    <a className="navbar-brand fs-3" href="#">E-shops</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="px-3 mx-1">Home</li>
                            <li className="px-3 mx-1">Contact</li>
                            <li className="px-3 mx-1">About</li>
                            <li className="px-3 mx-1">Sign Up</li>
                        </ul>

                    </div>

                    <div>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="mx-1">
                                <div className="input-group mt-1">
                                    <input type="search" className="form-control p-2" placeholder="What are you looking for ?" aria-label="Search"
                                        style={{ fontSize: "10px" }} />
                                    <span className="input-group-text"><CiSearch /></span>
                                </div>
                            </li>
                            <li className="px-1 m-1 fs-5 ">
                                <CiHeart />
                            </li>
                            <li className="px-1 m-1 fs-5">
                                <CiShoppingCart />
                            </li>
                            <li className=" text-center m-1 fs-5 bg-danger text-light rounded-circle" style={{ width: "30px", height: "30px" }}>
                                <CiUser />
                            </li>
                        </ul>
                    </div>

                    <ul className="extraLinks">
                        <li className="py-1"><CiUser /> Manage My Account</li>
                        <li className="py-1"><PiShoppingBagOpenThin /> Orders</li>
                        <li className="py-1"><IoIosCloseCircleOutline /> Cancellations</li>
                        <li className="py-1"><CiStar /> Reviews</li>
                        <li className="py-1"><CiLogout /> Logout</li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;