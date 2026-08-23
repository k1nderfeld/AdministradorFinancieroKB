import { Routes, Route } from "react-router-dom";
import Register from "../pages/auth/register/Register";

export default function AuthRoutes () {
    return (
        <Routes>
            <Route path="/auth/register" element={<Register />} />
        </Routes>       
    );
}