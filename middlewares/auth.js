import jwt from "jsonwebtoken";
import "dotenv/config";

const auth = (req, res, next) => {
  try {
    //extract JWT token
    //pending other ways to fetch token
    const token = req.body.token;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Token Missing",
      });
    }
    //verify the token
    try {
      const payload = jwt.verify(token, process.env.JWT_SECRET);
      console.log(payload);
      req.user = payload;
    } catch (error) {
        console.log(error);
      return res.status(401).json({
        success: false,
        message: "token is invalid",
      });
    }
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Something went wrong, while verifying the token",
    });
  }
};

const isStudent = (req, res, next) => {
    try {
        if(req.user.role !== "Student") {
            return res.status(401).json({
                success: false,
                message: "This is a protected route for students"
            })
        }
        next();
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "User Role is not matching"
        })
    }
}

const isAdmin = (req, res, next) => {
    try {
        if(req.user.role !== "Admin") {
            return res.status(401).json({
                success: false,
                message: "This is protected route for Admin"
            })
        }
        next();
    } catch (error) {
        return res.status(500).json({
            success: false, 
            message: "User role not matching"
        })
    }
}

export {auth, isStudent, isAdmin};