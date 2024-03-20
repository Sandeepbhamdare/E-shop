import { RiAppleFill, RiFacebookLine, RiGooglePlayFill, RiInstagramLine, RiLinkedinLine, RiSendPlane2Line, RiTwitterLine } from "react-icons/ri";

const Footer = () => {

    return (
        <>
            <div className="bg-dark text-light d-flex flex-row justify-content-center align-item-center py-5 gap-4 ">
                <ul>
                    <li className="fs-4 mb-2">Subsribe</li>
                    <li >
                        <p style={{ fontSize: "13px" }}>Get 10% off your first order</p>
                        <input type="text" className="bg-dark border border-light rounded-1 p-1 ps-3" placeholder="Enter your email" />
                        <span className="ms-2"><RiSendPlane2Line /></span>
                    </li>
                </ul>

                <ul style={{ fontSize: "13px" }}>
                    <li className="fs-4 mb-2">Support</li>
                    <li>123,xyz market ,Indore(MP)</li>
                    <li className="py-2">xyzeshop@gmail.com</li>
                    <li>+91 1234567890</li>
                </ul>

                <ul style={{ fontSize: "13px" }}>
                    <li className="fs-4 mb-2">Account</li>
                    <li className="py-1">My Account</li>
                    <li className="py-1">login/register</li>
                    <li className="py-1">Cart</li>
                    <li className="py-1">Wishlist</li>
                    <li className="py-1">Shop</li>
                </ul>

                <ul style={{ fontSize: "13px" }}>
                    <li className="fs-4 mb-2">Quick Link</li>
                    <li className="py-1">Privacy Policy</li>
                    <li className="py-1">Terms Of Use</li>
                    <li className="py-1">FAQ</li>
                    <li className="py-1">Contact</li>
                </ul>

                <ul style={{ fontSize: "13px" }}>
                    <li className="fs-4 mb-2">Download App</li>
                    <li>
                        <img src="" />
                        <div className="text-center">
                            <button className="btn btn-dark border border-light text-uppercase me-2 " style={{ fontSize: "10px" }}>
                                <RiGooglePlayFill className="fs-4 mx-1" />
                                Google Play
                            </button>
                            <button className="btn btn-dark border border-light text-uppercase me-2 " style={{ fontSize: "10px" }}>
                                <RiAppleFill className="fs-4 mx-1" />
                                Apple Store
                            </button>
                        </div>
                    </li>
                    <li className="text-center fs-5 my-2">
                        <RiFacebookLine className="mx-2" />
                        <RiTwitterLine className="mx-2" />
                        <RiInstagramLine className="mx-2" />
                        <RiLinkedinLine className="mx-2" />
                    </li>
                </ul>
            </div>
            <div className="text-center p-2 bg-dark text-light text-opacity-25 fs-6">Copyright xyz 2024. All right reserved </div>
        </>
    )
}

export default Footer;