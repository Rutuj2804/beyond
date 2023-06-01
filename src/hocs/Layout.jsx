import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";
import { useSelector } from "react-redux"

const Layout = ({ children }) => {

    const isLoading = useSelector(state=>state.employee.isLoading)

    return (
        <div>
            <Sidebar />
            {isLoading ? <Loader /> : null}
            <div className="layout__space">
                <Navbar />
                {children}
            </div>
        </div>
    );
};

export default Layout;
