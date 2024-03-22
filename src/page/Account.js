import { Link } from "react-router-dom";

const Account = () => {
    return (
        <>
            <nav aria-label="breadcrumb" className="container my-3" style={{ fontSize: "15px" }}>
                <ol className="breadcrumb text-secondary">
                    <li className="breadcrumb-item "><Link to="/" className="text-secondary">Home</Link></li>
                    <li className="breadcrumb-item text-dark" aria-current="page">Account</li>
                </ol>
            </nav>
            <div>
                <ul>
                    <li>My Product</li>
                    <li>Change password</li>
                    <li>My Orders</li>
                </ul>
                <div>
                    <form className="fs-6">
                        <div className="row">
                            <div className="mb-3">
                                <label htmlFor="firstName" className="form-label">User Name <span className="text-danger">*</span></label>
                                <input type="text" className="form-control bg-secondary bg-opacity-25" id="firstName" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="LastName" className="form-label">User Name <span className="text-danger">*</span></label>
                                <input type="text" className="form-control bg-secondary bg-opacity-25" id="LastName" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Account;