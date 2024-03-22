const Login = () => {

    return (
        <>
            <div className="container d-flex flex-row justify-content-around py-5">

                <div className="h-50 w-50">
                    <img src="./login.svg" />
                </div>
                <form className="align-self-center d-flex flex-column gap-4 ">
                    <div>
                        <h1 className="m-0 fs-2">Log in to E-shop</h1>
                        <p className="m-0" style={{fontSize:"12px"}}>Enter your details below</p>
                    </div>

                    <input type="email" className="border-0 border-bottom border-dark p-1" id="email" placeholder="Email or Phone Number" />

                    <input type="password" className="border-0 border-bottom border-dark p-1" id="password" placeholder="Password" />

                    <input type="password" className="border-0 border-bottom border-dark p-1" id="confirmpass" placeholder="Confirm Password" />

                    <div >
                        <button type="submit" className="btn btn-danger w-50 ">Log In</button>
                        <p className="d-inline text-danger ms-3" style={{fontSize:"13px"}}>Forgot pasword ?</p>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login;