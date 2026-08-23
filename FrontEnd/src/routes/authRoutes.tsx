import { Routes, Route } from "react-router-dom";
import Register from "../pages/auth/Register";

export default function AuthRoutes () {
    return (
        <Routes>
            <Route path="/auth/register" element={<Register />} />
        </Routes>       
    );
}