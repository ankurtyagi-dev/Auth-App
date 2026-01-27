import express from "express";
import signup from "../Controllers/Auth.js";
import { login } from "../Controllers/Auth.js";
import { auth, isStudent, isAdmin } from "../middlewares/auth.js";
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);

//testing protected route for sigle middleware
router.get("/test", auth,(req, res) => {
    res.json({
        success: true,
        message: "Welcome to the Protected route for Test"
    })
})

//Protected Route
router.get("/student", auth, isStudent, (req, res) => {
  res.json({
    success: true,
    message: "Welcome to the Protected route for Students",
  });
});

router.get("/admin", auth, isAdmin, (req, res) => {
  res.json({
    success: true,
    message: "Welcome to the Protected route for Admin",
  });
});

export default router;
