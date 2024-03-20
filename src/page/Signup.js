import { FcGoogle } from "react-icons/fc";

const Signup = () => {

    return (
        <>
            <div className="container d-flex flex-row justify-content-around py-5">

                <div className="h-50 w-50">
                    <img src="./signup.svg" />
                </div>
                <form className="align-self-center d-flex flex-column gap-2">
                    <div className="py-2">
                        <h1 className="m-0 fs-2">Create an account</h1>
                        <p className="m-0 pt-2" style={{ fontSize: "12px" }}>Enter your details below</p>
                    </div>

                    <input type="text" className="my-2 border-0 border-bottom border-dark p-1" id="userName" placeholder="Name" />

                    <input type="email" className="my-2 border-0 border-bottom border-dark p-1" id="email" placeholder="Email or Phone Number" />

                    <input type="password" className="my-2 border-0 border-bottom border-dark p-1" id="confirmpass" placeholder="Confirm Password" />


                    <button type="submit" className="btn btn-danger mt-2" style={{ fontSize: "13px" }}>Create Account</button>
                    <button className="btn btn-outline-dark" style={{ fontSize: "13px" }}> <FcGoogle className="fs-5" /> Sign up with Google</button>

                    <p className="text-secondary text-center mt-2" style={{fontSize:"11px"}}>Already have account? <a href="#">Login</a></p>
                </form>
            </div>
        </>
    )
}

export default Signup;