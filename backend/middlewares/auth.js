import { Guest } from "../models/GuestModel";

export const authenticateUser = async (req, res, next) => {
  try {
    if (req.header("Authorization")) {
      const guest = await Guest.findOne({
        accessToken: req.header("Authorization"),
      });
      if (guest) {
        console.log("Auth OK");
        next();
      } else {
        res.status(401).json({
          message: "Authorization failed",
        });
      }
    } else {
      res.status(401).json({
        message: "Authorization missing",
      });
    }
  } catch (error) {
    res.status(401).json({
      message: "Authorization failed",
      error: error,
    });
  }
};
