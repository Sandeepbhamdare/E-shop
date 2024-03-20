import Category from "../components/Category";
import ListCategory from "../components/ListCategory";
import ForSale from "../components/OnSale";
import BestSelling from "../components/BestSelling";
import SomeProducts from "../components/SomeProducts";
import Featured from "../components/Featured";
import { FaCircleArrowUp } from "react-icons/fa6";


export default function Home() {

    return (
        <>

            <div className='d-flex container gap-2'>
                <ListCategory />
                <img src={"./demo.png"} className='p-2 w-75' alt="demoImg" />
            </div>
            <ForSale />
            <hr className='text-secondary mx-5 pb-2' />
            <Category />
            <hr className='text-secondary m-5' />
            <BestSelling />
            <div className="w-100 text-center my-5">
                <img src="./demo2.png" className=" py-2" width={"75%"} alt="demo2Img" />
            </div>
            <hr className='text-secondary m-5' />
            <SomeProducts />
            <hr className='text-secondary m-5' />
            <Featured />
        
            <FaCircleArrowUp className="position-absolute end-0 fs-2 mx-3 text-secondary text-opacity-25 " />
        </>
    )
}


