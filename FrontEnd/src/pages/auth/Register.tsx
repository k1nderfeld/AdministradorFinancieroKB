import handleRegister from "../../services/User/registerService.js";
import RegisterUserRequest from "../interfaces/register.js";
import Input from "../components/ui/input";

export default function Register() {
    const [form, setForm] = useState<RequestUserResponse>({
        rut: "",
        name: "",
        lastName: "",
        birthDate: "",
        phoneNumber: "",
        email: ""
    });
    // método de navegación entre páginas
    const navigate = useNavigate();
    
    const [loading, setLoading] = useState(false);       
}
