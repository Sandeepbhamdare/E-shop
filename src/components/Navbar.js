import "../App.css";
import { CiSearch, CiHeart, CiShoppingCart, CiUser, CiStar, CiLogout } from "react-icons/ci";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { PiShoppingBagOpenThin } from "react-icons/pi";
import { Link } from "react-router-dom";
import { useState } from "react";
const Navbar = () => {

    const [accountView, setaccountView] = useState(false)

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
                            <li className="px-3 mx-1">
                                <Link to="/">Home</Link></li>
                            <li className="px-3 mx-1"><Link to="#">Contact</Link></li>
                            <li className="px-3 mx-1"><Link to="#">About</Link></li>
                            <li className="px-3 mx-1"><Link to="/signup">Sign Up</Link></li>
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
                                <Link to="/wishlist">
                                    <CiHeart />
                                </Link>
                            </li>
                            <li className="px-1 m-1 fs-5">
                                <Link to="/cart">
                                    <CiShoppingCart />
                                </Link>
                            </li>
                            <li className=" text-center m-1 fs-5 bg-danger text-light rounded-circle userInfo " >

                                <CiUser className="userlogin" onClick={() => setaccountView(!accountView)} />
                            </li>
                        </ul>
                    </div>

                    <ul className={`${accountView ? "extraLinks" : "extraLinks d-none"}`}>
                        <li className="py-1">
                            <Link to="/useraccount" onClick={() => setaccountView(!accountView)}>
                                <CiUser /> Manage My Account
                            </Link>
                        </li>
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