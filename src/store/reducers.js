import { combineReducers } from "@reduxjs/toolkit"
import employee from "./employee"
import auth from "./auth"

export const reducers = combineReducers({ 
    auth,
    employee,
})