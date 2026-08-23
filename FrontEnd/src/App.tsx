import { Toaster } from "sonner";
import AuthRoutes from "./routes/authRoutes";

export default function App() {
  return (
    <>
      <Toaster />
      <AuthRoutes />
    </>
  );
}