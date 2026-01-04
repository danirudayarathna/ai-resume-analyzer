import React from "react";
import {Link} from "react-router";

const Navbar: () => React.JSX.Element = () => {
    return (
        <div>
            <Link to="/">
                <p className={"text-2xl font-bold text-gradient"}>CVaid</p>
            </Link>
            <Link to="/upload" className="primary-button w-fit">
                Upload CV
            </Link>
        </div>
    )
}
export default Navbar;