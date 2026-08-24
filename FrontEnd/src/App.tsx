import { Toaster } from "sonner";
import AuthRoutes from "./routes/authRoutes";

export default function App() {
  return (
    <>
      <Toaster />
      <main className="page"> 
        <section className="global-container">
          <div className="container-decoration">
            <div className="global-content">
              <AuthRoutes />
            </div>
          </div>
        </section>
      </main>  
    </>
  );
}