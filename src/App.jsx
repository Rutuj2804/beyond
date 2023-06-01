import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./hocs/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PrivateRoute from "./routes/PrivateRoute";

const App = () => {
    return (
        <div>
            <Router>
                <Routes>
                        <Route
                            path="/"
                            element={
                                <PrivateRoute>
                                    <Layout><Home /></Layout>
                                </PrivateRoute>
                            }
                        />
                    <Route path={"/login"} element={<Login />} />
                </Routes>
            </Router>
        </div>
    );
};

export default App;
