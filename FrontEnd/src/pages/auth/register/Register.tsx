import "./Register.css"
import { toast } from "sonner";
import registerIcons from "../../../assets/icons/register/registerIcons.js";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import handleRegister from "../../../services/User/registerService.js";
import handleApiError from "../../../utils/handleApiError.js";
import type { RegisterUserRequest } from "../../../interfaces/Auth/register.js";
import Button from "../../../components/ui/button/button.js";
import Input from "../../../components/ui/input/input.js";

export default function Register() {
    // método de navegación entre páginas
    const navigate = useNavigate();
    
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
        <section className="register">
            <h1>
                Create an Account
            </h1>
            {/* Form */} 
            <form className="register-form" onSubmit={handleSubmit}>
                <div className="register-inputs">
                    <Input
                        type="text"
                        name="name"
                        placeholder="Name"
                        icon={
                            <img 
                                src={registerIcons.user} 
                                alt=""
                                className="input-icon-name"
                            />
                        }
                        value={form.name}
                        onChange={handleChange}
                        required
                    />

                    <Input
                        type="text"
                        name="lastName"
                        placeholder="Lastname"
                        icon={
                            <img 
                                src={registerIcons.user} 
                                alt=""
                                className="input-icon-name"
                            />
                        }
                        value={form.lastName}
                        onChange={handleChange}
                        required
                    />

                    <Input
                        type="text"
                        name="rut"
                        placeholder="RUT"
                        icon={
                            <img 
                                src={registerIcons.rut}
                                alt=""
                                className="input-icon-rut"
                            />
                        }
                        value={form.rut}
                        onChange={handleChange}
                        required
                    />

                    <Input
                        type="text"
                        name="email"
                        placeholder="Email"
                        icon={
                            <img
                                src={registerIcons.email}
                                alt=""
                                className="input-icon-email"
                            />
                        }
                        value={form.email}
                        onChange={handleChange}
                        required
                    />

                    <Input
                        type="text"
                        name="phoneNumber"
                        placeholder="Phone Number"
                        icon={
                            <img
                                src={registerIcons.phoneNumber}
                                alt=""
                                className="input-icon-phone"
                            />
                        }
                        value={form.phoneNumber}
                        onChange={handleChange}
                        required
                    />

                    <Input
                        type="text"
                        name="birthDate"
                        placeholder="Birth Date"
                        icon={
                            <img
                                src={registerIcons.birthDate}
                                alt=""
                                className="input-icon-date"
                            />
                        }
                        value={form.birthDate}
                        onChange={handleChange}
                        required
                    />
                </div>
                    <Button
                        type="submit"
                        className="button"
                        text={loading ? "Creating account..." : "Sign Up"}
                        disabled={loading}
                    />
            </form>

            <p>
                Already have an account?
                <Link to="/login">
                    Log in
                </Link>
            </p>
        </section>
    );
}
