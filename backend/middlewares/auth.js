import { Guest } from "../models/GuestModel";

export const authenticateUser = async (req, res, next) => {
  const guest = await Guest.findOne({
    accessToken: req.header("Authorization"),
  });
  if (guest) {
    next();
  } else {
    res.status(401).json({
      message: "Authorization failed",
    });
  }
};
