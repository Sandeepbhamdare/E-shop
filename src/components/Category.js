import { BsArrowLeftCircleFill, BsArrowRightCircleFill, BsCamera, BsSmartwatch } from "react-icons/bs";
import { FiSmartphone } from "react-icons/fi";
import { RiComputerLine, RiHeadphoneLine, RiTShirt2Line } from "react-icons/ri";
import { LuGamepad } from "react-icons/lu";
import { PiDress } from "react-icons/pi";
import { TbHorseToy, TbMoodKid } from "react-icons/tb";

const Category = () => {

    return (
        <>
            <div className="d-flex flex-row container mt-5">
                <a className="bg-danger me-2 py-4 rounded" style={{ width: "30px" }}></a>
                <h2 className="fs-6 align-self-center text-danger"> Categories</h2>
            </div >
            <div className="d-flex flex-row justify-between container">
                <h2 className="align-self-center fs-5 my-3">Browse By Category</h2>
                <div className="fs-3 text-end flex-grow-1">
                    <BsArrowLeftCircleFill className="me-2 text-secondary text-opacity-25" />
                    <BsArrowRightCircleFill className=" text-secondary text-opacity-25" />
                </div>
            </div>
            <div className="container">
                <ul className="category">
                    <li>
                        <FiSmartphone />
                        <p>Phones</p>
                    </li>
                    <li>
                        <RiComputerLine />
                        <p>Computers</p>
                    </li>
                    <li>
                        <BsSmartwatch />
                        <p>Smartwatch</p>
                    </li>
                    <li>
                        <BsCamera />
                        <p>Camera</p>
                    </li>
                    <li>
                        <RiHeadphoneLine />
                        <p>Headphones</p>
                    </li>
                    <li>
                        <LuGamepad />
                        <p>Gaming</p>
                    </li>
                    <li>
                        <RiTShirt2Line />
                        <p>Men's collection</p>
                    </li>
                    <li>
                        <PiDress />
                        <p>Women's collection</p>
                    </li>
                    <li>
                        <TbMoodKid />
                        <p>Kid's collection</p>
                    </li>
                    <li>
                        <TbHorseToy />
                        <p>Toys</p>
                    </li>
                </ul>
            </div>
        </>
    )

}


export default Category;