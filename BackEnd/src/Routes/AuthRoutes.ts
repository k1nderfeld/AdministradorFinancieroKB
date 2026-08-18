import { Router } from "express";
import UserRepository from "../Repository/UserRepository.js";
import AuthServices from "../Services/AuthServices.js";
import AuthController from "../Controllers/AuthController.js";

const router = Router();

const userRepository = new UserRepository();
const authServices = new AuthServices(userRepository);
const authController = new AuthController(authServices);

router.post("/register", async (req, res) => {
    await authController.Register(req, res);
});

export default router;