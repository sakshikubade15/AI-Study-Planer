import jwt from "jsonwebtoken";

import User from "../models/User.js";

const protect = async (req, res, next) => {

  let token;

  // Check authorization header
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {

    try {

      // Get token
      token = req.headers.authorization.split(" ")[1];

      // Verify token
      const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET
      );

      // Attach user to request
      req.user = await User.findById(decoded.id)
        .select("-password");

      next();

    } catch (error) {

      return res.status(401).json({
        success: false,
        message: "Not authorized",
      });

    }

  }

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "No token provided",
    });
  }

};

export default protect;