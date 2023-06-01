import { CircularProgress } from "@mui/material";
import React from "react";

const Loader = () => {
    return (
        <div className="loader">
            <div className="main">
                <CircularProgress />
            </div>
        </div>
    );
};

export default Loader;
