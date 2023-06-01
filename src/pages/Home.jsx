import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserList } from "../store/employee";
import Piechart from "../components/Piechart";

const Home = () => {
    const [genderSeries, setGenderSeries] = useState([0, 0]);
    const [native, setNative] = useState([[], []]);
    const [nativeObject, setNativeObject] = useState({});

    const employeeData = useSelector((state) => state.employee.data);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserList());
    }, []);

    useEffect(() => {
        let m = 0,
            f = 0;
        for (let i = 0; i < employeeData.length; i++) {
            if (employeeData[i].gender === "male") m++;
            else f++;
        }

        setGenderSeries([m, f]);
    }, [employeeData]);

    useEffect(() => {
        let nt = {};
        for (let i = 0; i < employeeData.length; i++) {
            nt[employeeData[i].nat] = 0;
        }

        for (let i = 0; i < employeeData.length; i++) {
            nt[employeeData[i].nat]++;
        }

        setNativeObject(nt);

        let label = [],
            values = [];

        for (let key in nt) {
            label.push(key);
            values.push(nt[key]);
        }

        setNative([label, values]);
    }, [employeeData]);

    return (
        <div className="home__Wrapper">
            <div className="paper">
                <h2>Gender</h2>
                <Piechart data={genderSeries} labels={["Male", "Female"]} />
                <div className="info">
                    <h6>Total Users: {genderSeries[0] + genderSeries[1]}</h6>
                    <h6>Male: {genderSeries[0]}</h6>
                    <h6>Female: {genderSeries[1]}</h6>
                </div>
            </div>
            <div className="paper">
                <h2>Nationality</h2>
                <Piechart data={native[1]} labels={native[0]} />
                <div className="info">
                    <h6>Total Users: {genderSeries[0] + genderSeries[1]}</h6>
                    {Object.keys(nativeObject).map((x) => (
                        <h6>
                            {x}: {nativeObject[x]}
                        </h6>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
