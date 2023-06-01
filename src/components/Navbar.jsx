import {
    MenuRounded,
    SearchRounded,
    SettingsRounded,
} from "@mui/icons-material";
import { Button, IconButton, Tooltip } from "@mui/material";
import { useDispatch, useSelector } from "react-redux"
import { setLogout } from "../store/auth";

const Navbar = () => {

    const dispatch = useDispatch()

    const username = useSelector(state=>state.auth.name)

    return (
        <div>
            <div className="navbar__Wrapper">
                <div className="left">
                </div>
                <div className="right">
                    <div className="search">
                        {username}
                    </div>
                    <div className="logout">
                        <Button onClick={()=>dispatch(setLogout())}>
                            Logout
                        </Button>
                    </div>
                    <div className="search">
                        <Tooltip title="Search">
                            <IconButton>
                                <SearchRounded />
                            </IconButton>
                        </Tooltip>
                    </div>
                    <div className="settings">
                        <Tooltip title="Settings">
                            <IconButton>
                                <SettingsRounded />
                            </IconButton>
                        </Tooltip>
                    </div>
                    <div className="menu">
                        <Tooltip title="Menu">
                            <IconButton>
                                <MenuRounded />
                            </IconButton>
                        </Tooltip>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
