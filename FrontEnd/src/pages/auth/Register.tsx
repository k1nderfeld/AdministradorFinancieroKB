import toast from "react-hot-toast";
import Input from "../../components/ui/input.js";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import handleRegister from "../../services/User/registerService.js";
import handleApiError from "../../utils/handleApiError.js";
import type { RegisterUserRequest } from "../../interfaces/Auth/register.js";
import Button from "../../components/ui/button.js";

export default function Register() {
    // método de navegación entre páginas
    // const navigate = useNavigate();
    
    const [form, setForm] = useState<RegisterUserRequest>({
        rut: "",
        name: "",
        lastName: "",
        birthDate: "",
        phoneNumber: "",
        email: ""
    });
    
    const [loading, setLoading] = useState(false);      

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setForm({...form, [name] : value});
    }

    // Envío del form
    const handleSubmit = async (event: React.FormEvent) => {
        // Prevenir la recarga de la página
        event.preventDefault();

        try {
            setLoading(true); // Se inhabilita el submit del form
            const response = await handleRegister(form);
            // Si el registro es exitoso
            if (response.code === 201) {
                toast.success(response.message);
            }

        } catch (error) {
            toast.error(handleApiError(error));

        } finally {
            setLoading(false); // Se habilita el submit del form
        }
    } 

    return (
        <main>
            <section>
                <h1>
                    Create Account
                </h1>
                {/* Form */} 
                <form onSubmit={handleSubmit}>
                    <Input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={form.name}
                        onChange={handleChange}
                        required
                    />

                    <Input
                        type="text"
                        name="lastName"
                        placeholder="Lastname"
                        value={form.lastName}
                        onChange={handleChange}
                        required
                    />

                    <Input
                        type="text"
                        name="rut"
                        placeholder="RUT"
                        value={form.rut}
                        onChange={handleChange}
                        required
                    />

                    <Input
                        type="text"
                        name="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={handleChange}
                        required
                    />

                    <Input
                        type="text"
                        name="phoneNumber"
                        placeholder="Phone Number"
                        value={form.phoneNumber}
                        onChange={handleChange}
                        required
                    />

                    <Input
                        type="text"
                        name="birthDate"
                        placeholder="Birth Date"
                        value={form.birthDate}
                        onChange={handleChange}
                        required
                    />

                    <Button
                        type="submit"
                        text={loading ? "Creating account..." : "Sign Up"}
                        disabled={loading}
                   />
                </form>
            </section>
        </main>
    );
}
